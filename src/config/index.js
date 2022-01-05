
const baseUrl = 'http://localhost:5000/api'
const remoteBaseUrl = 'https://regista-api.herokuapp.com/api'

export const config = {
    getUser: `${remoteBaseUrl}/registeredUsers`,
    register: `${remoteBaseUrl}/register`,
    baseUrl,
}