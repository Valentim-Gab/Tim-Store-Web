export interface FetchAuth {
  url: string
  method?: string
  body?: BodyInit | null
  token?: string
  cache?: RequestCache
}