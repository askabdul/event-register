
const baseUrl = 'http://localhost:8080/api'
const remoteBaseUrl = 'https://regista-api.herokuapp.com/api'

export const config = {
    getUser: `${remoteBaseUrl}/registeredUsers`,
    register: `${remoteBaseUrl}/register`,
    baseUrl,
}