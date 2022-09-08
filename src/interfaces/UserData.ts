export type UserData = {
  id: string
  is_admin: boolean
  name: string
  email: string
  age: number
  created_at: string
}

export type UserDataPost = {
  is_admin: boolean
  name: string
  email: string
  age: number
}

export type UserDataPut = {
  name?: string
  email?: string
  age?: number
}
