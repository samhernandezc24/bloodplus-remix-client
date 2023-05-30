import axios from 'axios'

interface LoginResponse {
  data: any
}

export async function loginApi(
  email: string,
  password: string
): Promise<LoginResponse> {
  try {
    if (!email || !password) {
      throw new Error('El email y/o contraseña son requeridos.')
    }

    const response = await axios.post<LoginResponse>(
      'http://127.0.0.1:8000/api/v1/token/',
      {
        email,
        password,
      }
    )

    return response.data
  } catch (error) {
    console.error('Hubo un error durante el inicio de sesión:', error)
    throw new Error('Login fallido.')
  }
}
