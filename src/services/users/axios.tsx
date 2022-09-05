import { UserData, UserDataPost, UserDataPut } from '../../interfaces'
import { api } from '../api'
import { resource } from './_environment'

export async function getUsers() {
  const response = await api.get<UserData[]>(`${resource}`)

  return response
}

export async function getUserById(userId: string) {
  const response = await api.get<UserData>(`${resource}/${userId}`)

  return response
}

export async function postUser(userData: UserDataPost) {
  const response = await api.post(`${resource}`, userData)

  return response
}

export async function putUser(userId: string, userData: UserDataPut) {
  const response = await api.put(`${resource}/${userId}`, userData)

  return response
}
