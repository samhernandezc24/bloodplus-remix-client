import axios from 'axios'

let client = axios.create({
  baseUrl: process.env.API_HOST,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
})

client.interceptors.response.use(
  response => response,
  error => {
    if (!error.response) {
      return Promise.reject(error)
    }

    if (error.response.status === 401) {
      throw redirect('/acceso')
    }
    return Promise.reject(error)
  }
)

export default client
