import axios from 'axios'

// Función de utilidad para realizar la solicitud de API a BloodPlus
const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url)
    return response.data.data
  } catch (error) {
    console.error(error)
    throw new Error('Error al obtener los datos de la API')
  }
}

// Obtener los datos de los donantes para el listado
export const getDonorsData = async () => {
  const apiUrl = 'http://127.0.0.1:8000/api/v1/usuarios/?role=DONADOR'
  return fetchData(apiUrl)
}
