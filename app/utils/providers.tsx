import {useMatches} from '@remix-run/react'
import * as React from 'react'
import {type NRHandle} from 'types'

function createSimpleContext<ContextType>(name: string) {
  const defaultValue = Symbol(`Default ${name} context value`)
  const Context = React.createContext<ContextType | null | typeof defaultValue>(
    defaultValue
  )
  Context.displayName = name

  function useValue() {
    const value = React.useContext(Context)
    if (value === defaultValue) {
      throw new Error(`use${name} debe utilizarse dentro de ${name}Provider`)
    }
    if (!value) {
      throw new Error(
        `No hay valor en el contexto ${name}Provider. Si el valor es opcional en esta situación, pruebe useOptional${name} en lugar de use${name}.`
      )
    }
    return value
  }
}

function useMatchLoaderData<LoaderData>(handleId: string) {
  const matches = useMatches()
  const match = matches.find(
    ({handle}) => (handle as NRHandle | undefined)?.id === handleId
  )
  if (!match) {
    throw new Error(`No hay una ruta activa para manejar con ID ${handleId}`)
  }
  return match.data as LoaderData
}

export {createSimpleContext, useMatchLoaderData}
