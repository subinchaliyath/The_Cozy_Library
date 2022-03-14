export interface BookDetails {
  id: string
  author: string
  name: string
  img: string
}
export interface Book {
  author: string
  name: string
  img: string
}

export interface BookState {
  data: BookDetails | null
  error: string[] | null
  loading: boolean
  success?: boolean
}
