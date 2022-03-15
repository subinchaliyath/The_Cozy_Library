export interface BookDetails {
  id: string
  author: {
    name: string
  }
  name: string
  img: string
  price: number
}
export interface Book {
  author: {
    name: string
  }
  name: string
  img: string
  price: number
}

export interface BookState {
  data: BookDetails | null
  error: string[] | null
  loading: boolean
  success?: boolean
}
