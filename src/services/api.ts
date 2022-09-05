import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://63125c3ff5cba498da91ad2b.mockapi.io/api/v1/'
})
