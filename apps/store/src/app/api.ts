// import { cookies } from "next/headers";
// import { setCookie } from "nookies";

// export async function makeApiRequest(url: string, options: any = {}) {
//   const accessToken = cookies().get('access_token')?.value;

//   const headers = {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${accessToken}`,
//     ...options.headers,
//   };

//   const config = {
//     ...options,
//     headers,
//   };

//   try {
//     const response = await fetch(url, config);

//     if (response.status === 403) {
//       console.log('Expirou')

//       const data = await response.json();

//       if (data.error === 'session_expired') {
//         const res = await fetch('http://localhost:3001/refresh', {
//           method: 'POST',
//           body: JSON.stringify({
//             refresh_token: cookies().get('refresh_token')?.value
//           }),
//           headers: headers
//         })

//         const { tokens } = await res.json()

//         setCookie(undefined, 'access_token', tokens.access_token, {
//           maxAge: 60 * 60 * 24 * 7, //1 semana
//         })
//         setCookie(undefined, 'refresh_token', tokens.refresh_token, {
//           maxAge: 60 * 60 * 24 * 7, //1 semana
//         })

//         console.log(cookies().get('access_token'))

//         headers.Authorization = `Bearer ${cookies().get('access_token')}`;

//         const newConfig = { ...config, headers };

//         return makeApiRequest(url, newConfig);
//       }
//     }

//     if (!response.ok) {
//       throw new Error('Erro na chamada à API');
//     }

//     return await response.json();
//   } catch (error) {
//     throw error;
//   }
// }

import axios from 'axios'
import { cookies } from 'next/headers'
import { setCookie } from 'nookies'

const token = cookies().get('access_token')?.value

export const api = axios.create({
  baseURL: 'http://localhost:3001',
})

api.interceptors.request.use((config) => {
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (
      error.response.status === 403 &&
      error.response.data.error === 'session_expired'
    ) {
      try {
        const refreshToken = cookies().get('refresh_token')?.value;
      
        const res = await api.post('/refresh', {
          refresh_token: refreshToken
        })

        if (res.data && res.data.tokens.access_token) {
          const { tokens } = res.data

          console.log(tokens)

          setCookie(null, 'access_token', tokens.access_token, {
            maxAge: 60 * 60 * 24 * 7, //1 semana
          })
          setCookie(null, 'refresh_token', tokens.refresh_token, {
            maxAge: 60 * 60 * 24 * 7, //1 semana
          })

          // cookies().set('access_token', tokens.access_token, {
          //   maxAge: 60 * 60 * 24 * 7 //1 semana
          // })
          // cookies().set('refresh_token', tokens.refresh_token, {
          //   maxAge: 60 * 60 * 24 * 7 //1 semana
          // })

          console.log('Sipah deu')

          //api(error.config);
          return Promise.reject(error);
        }
      } catch (refreshError) {
        console.error('Erro ao renovar o token:', refreshError);
      }
    }

    return Promise.reject(error);
  }
)
