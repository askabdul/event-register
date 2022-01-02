
const baseUrl = 'http://localhost:5000/api'
// const remoteBaseUrl = 'https://regista-api.herokuapp.com/api'

export const config = {
    getUser: `${baseUrl}/registeredUsers`,
    register: `${baseUrl}/register`,
    baseUrl,
}