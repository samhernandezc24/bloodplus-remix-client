import * as React from 'react'

// Esto existe para permitirnos renderizar React con un nonce en el servidor y
// sin uno en el cliente. Esto es necesario porque no podemos enviar el nonce
// al cliente en JS porque es un riesgo de seguridad y el navegador elimina el atributo
// atributo nonce de scripts y cosas de todos modos así que si hidratamos con un nonce
// obtendríamos una advertencia de hidratación.

export const NonceContext = React.createContext<string | undefined>(undefined)
export const NonceProvider = NonceContext.Provider
export const useNonce = () => React.useContext(NonceContext)
