import { request } from './config'

export async function login(username: string, password: string) {
  return request.post('/login', { username, password })
}
