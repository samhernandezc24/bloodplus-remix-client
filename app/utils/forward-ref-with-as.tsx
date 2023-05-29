import * as React from 'react'

/**
 * React.Ref utiliza el tipo readonly `React.RefObject` en lugar de
 * `React.MutableRefObject`. Casi siempre asumimos que los objetos ref
 * son mutables (al menos cuando los creamos), así que este tipo es una solución para
 * que algunas de las raras mecánicas de usar refs con TS.
 */
export type AssignableRef<ValueType> =
  | {
      bivarianceHack(instance: ValueType | null): void
    }['bivarianceHack']
  | React.MutableRefObject<ValueType | null>
  | null

////////////////////////////////////////////////////////////////////////////////
// Los siguientes tipados nos ayudan con la proposición `as`.
// He estado dando vueltas hasta que he conseguido que esto funcione usando otros proyectos,
// como una guía aproximada, pero parece que funciona así que, meh, ¿eso está bien? ¡Hurra TS! 🙃
// P = props adicionales
// T = tipo de componente a renderizar
export type As<BaseProps = any> = React.ElementType<BaseProps>

export type PropsWithAs<
  ComponentType extends As,
  ComponentProps
> = ComponentProps &
  Omit<
    React.ComponentPropsWithRef<ComponentType>,
    'as' | keyof ComponentProps
  > & {
    as?: ComponentType
  }

export type PropsFromAs<
  ComponentType extends As,
  ComponentProps
> = (PropsWithAs<ComponentType, ComponentProps> & {as: ComponentType}) &
  PropsWithAs<ComponentType, ComponentProps>

export type ComponentWithForwardRef<
  ElementType extends React.ElementType,
  ComponentProps
> = React.ForwardRefExoticComponent<
  ComponentProps &
    React.HTMLProps<React.ElementType<ElementType>> &
    React.ComponentPropsWithRef<ElementType>
>

export interface ComponentWithAs<ComponentType extends As, ComponentProps> {
  // Estos tipados son un pequeño hack, pero nos cubren en los casos en los que el `as` prop
  // no es un tipo de string JSX. Hace feliz al compilador así que 🤷‍♂️
  <TT extends As>(
    props: PropsWithAs<TT, ComponentProps>
  ): React.ReactElement | null
  (props: PropsWithAs<ComponentType, ComponentProps>): React.ReactElement | null

  displayName?: string
  propTypes?: React.WeakValidationMap<
    PropsWithAs<ComponentType, ComponentProps>
  >
  contextType?: React.ValidationMap<any>
  defaultProps?: Partial<PropsWithAs<ComponentType, ComponentProps>>
}

/**
 * Esto es un hack seguro. La cosa es que conseguir que un componente infiera inteligentemente
 * infer props basado en un componente o string JSX pasado en un `as` prop es
 * un gran dolor de cabeza. Conseguir que funcione y satisfaga las restricciones de
 * `forwardRef` parece casi imposible. Para evitar tener que hacer esto incómodo
 * cada vez que queramos reenviar una referencia a un componente
 * que acepta una proposición "as", abstraemos todo ese pedo a esta función por el momento.
 *
 * TODO: Eventualmente deberiamos intentar que las definiciones de tipo de arriba
 * funcionen en todos los ámbitos, ¡pero nadie tiene tiempo para este pedo, ni siquiera yo!
 *
 * @param Comp
 */
export function forwardRefWithAs<Props, ComponentType extends As>(
  comp: (
    props: PropsFromAs<ComponentType, Props>,
    ref: React.RefObject<any>
  ) => React.ReactElement | null
) {
  return React.forwardRef(comp as any) as unknown as ComponentWithAs<
    ComponentType,
    Props
  >
}
