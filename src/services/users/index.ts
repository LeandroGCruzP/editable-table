import { useQuery } from '@tanstack/react-query'
import { UserData } from '../../interfaces'
import { api } from '../api'
import { resource } from './_environment'

async function getUsers() {
  const response = await api.get<UserData[]>(`${resource}`)

  return response
}

export function queryUsers() {
  const list = useQuery([resource], () => getUsers())

  return { list }
}
