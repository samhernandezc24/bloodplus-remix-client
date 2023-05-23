// esto es necesario para cosas que el root necesita, asi que para evitar deps circulares tenemos que
// ponerlo en su propio archivo, lo que es una tontería, lo sé...
import {handle, type LoaderData} from '../root'
import { useMatchLoaderData } from "./providers"

export const useRootData = () => useMatchLoaderData<LoaderData>(handle.id)
export function useUser() {
  const {user} = useRootData()
  if (!user) throw new Error('El Usuario es requerido cuando se usa useUser')
  return user
}

export function useOptionalUser() {
  const {user} = useRootData()
  return user
}
