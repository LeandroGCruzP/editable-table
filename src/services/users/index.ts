import { useQuery, useMutation } from '@tanstack/react-query'
import { UserDataPost, UserDataPut } from '../../interfaces'
import { getUserById, getUsers, postUser, putUser } from './axios'
import { resource, resourceUnique } from './_environment'

export function queryGetUsers() {
  return useQuery([resource], () => getUsers())
}

export function queryGetUserById(userId: string) {
  return useQuery([resource, resourceUnique], () => getUserById(userId))
}

export function queryPostUser() {
  return useMutation((userData: UserDataPost) => postUser(userData))
}

export function queryPutUser(userId: string) {
  return useMutation((userData: UserDataPut) => putUser(userId, userData))
}
