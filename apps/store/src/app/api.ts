import { cookies } from "next/headers";

export async function makeApiRequest(url: string, options: any = {}) {
  const accessToken = cookies().get('access_token')?.value;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, config);

    if (response.status === 403) {
      console.log('Expirou')

      const data = await response.json();

      if (data.error === 'session_expired') { 
        const res = await fetch('http://localhost:3001/refresh', {
          method: 'POST',
          body: JSON.stringify({
            refresh_token: cookies().get('refresh_token')?.value
          }),
          headers: headers
        })

        const newData = await res.json()
        const newToken = newData.tokens.access_token 

        cookies().set('access_token', newToken)

        headers.Authorization = `Bearer ${newToken}`;

        const newConfig = { ...config, headers };

        return makeApiRequest(url, newConfig);
      }
    }

    if (!response.ok) {
      throw new Error('Erro na chamada à API');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}