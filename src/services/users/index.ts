import { useQuery, useMutation } from '@tanstack/react-query'
import { UserData } from '../../interfaces'
import { api } from '../api'
import { resource, resourceUnique } from './_environment'

async function getUsers() {
  const response = await api.get<UserData[]>(`${resource}`)

  return response
}

async function getUserById(userId: string) {
  const response = await api.get<UserData[]>(`${resource}/${userId}`)

  return response
}

async function postUser(userData: UserData) {
  const response = await api.post(`${resource}`)

  return response
}

export function queryGetUsers() {
  return useQuery([resource], () => getUsers())
}

export function queryGetUserById(userId: string) {
  return useQuery([resource, resourceUnique], () => getUserById(userId))
}

export function queryPostUser() {
  return useMutation((userData: UserData) => postUser(userData))
}

export function queryPutUser(userId: string) {
  return useMutation((userData: UserData) => postUser(userId, userData))
}
