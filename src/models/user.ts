export interface UserDetails {
  email: string
  id: string
  name: string
  mobile?: number | null
  address?: string
}

export interface UsersState {
  data: UserDetails | null
  error: string[] | null
  loading: boolean
  success?: boolean
}
