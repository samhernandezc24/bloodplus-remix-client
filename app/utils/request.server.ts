import {json} from '@remix-run/node'

/**
 * Este función helper nos ayuda a enviar un status HTTP preciso,
 * 400 Bad Request, al cliente.
 */
export const badRequest = <T>(data: T) => json<T>(data, {status: 400})
