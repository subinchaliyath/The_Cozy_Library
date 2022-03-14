export interface UserDetails {
  email: string
  id: string
  name: string
}

export interface UsersState {
  data: UserDetails | null
  error: string[] | null
  loading: boolean
  success?: boolean
}
