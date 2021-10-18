
const baseUrl = 'http://localhost:8080/api'
const remoteBaseUrl = 'https://regista-api.herokuapp.com'

export const config = {
    getUser: `${baseUrl}/registeredUsers`,
    register: `${baseUrl}/register`,
    remoteBaseUrl,
}