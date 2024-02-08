import { cookies } from "next/headers";
import { AxiosInstance } from "axios";
import { getAPIServer } from "@/app/api/apiConfig";

type PrefetchFn<T> = (serverApi: AxiosInstance) => Promise<T>;

export default async function usePrefetchQuery<T>(
  fetchFn: PrefetchFn<T>
): Promise<T> {
  const serverCookies = cookies().getAll();
  const serverApi = getAPIServer(serverCookies);
  const result = await fetchFn(serverApi);

  return result;
}
