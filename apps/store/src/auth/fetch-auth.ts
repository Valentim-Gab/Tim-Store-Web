export interface FetchAuth {
  url: string
  method?: string
  body?: BodyInit | null
  token?: string
  refresh_token?: string
  cache?: RequestCache
}