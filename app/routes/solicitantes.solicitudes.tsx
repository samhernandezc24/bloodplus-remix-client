import PageHeading from '~/components/layout/page-heading'
import {MDXComponents} from '~/components/mdx/mdx-components'

const {p: P} = MDXComponents

export default function SolicitantesSolicitudesRoute() {
  const title = 'Mis Solicitudes'
  const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      bloodType: 'A+',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      dateCreation: '24 de abril de 2023 a las 16:30',
      status: 'Enviada',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
      bloodType: 'O+',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      dateCreation: '25 de abril de 2023 a las 12:30',
      status: 'Aceptada',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Dries Vincent',
      email: 'dries.vincent@example.com',
      bloodType: 'O+',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      dateCreation: '25 de abril de 2023 a las 13:10',
      status: 'Enviada',
      lastSeen: null,
    },
    {
      name: 'Lindsay Walton',
      email: 'lindsay.walton@example.com',
      bloodType: 'A+',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      dateCreation: '26 de abril de 2023 a las 12:45',
      status: 'Aceptada',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Courtney Henry',
      email: 'courtney.henry@example.com',
      bloodType: 'A+',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      dateCreation: '24 de abril de 2023 a las 15:30',
      lastSeen: '3h ago',
      status: 'Rechazada',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Tom Cook',
      email: 'tom.cook@example.com',
      bloodType: 'A+',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      dateCreation: '24 de abril de 2023 a las 8:00',
      status: 'Aceptada',
      lastSeen: null,
    },
  ]

  return (
    <>
      <div className="mx-auto max-w-5xl px-0 lg:px-4">
        <PageHeading title={title} />
      </div>
      <div className="px-5 sm:px-12">
        <div className="mx-auto max-w-7xl lg:flex lg:flex-col lg:items-center">
          <div className="ml-0 max-w-4xl 2xl:mx-auto">
            <div className="font-display text-xl leading-relaxed text-primary">
              <P>
                En esta sección puedes ver el listado de las solicitudes que has
                enviado así como el estado en el que se encuentran, para poder
                darle seguimiento a tu solicitud te recomendamos estar pendiente
                de este apartado.
              </P>
              <hr className="my-6 block border-b border-t-0 border-border" />
              <div className="mt-12 flex flex-col gap-5 sm:-mx-5">
                <ul role="list" className="divide-y divide-gray-100">
                  {people.map(person => (
                    <li
                      key={person.email}
                      className="flex justify-between gap-x-6 py-5"
                    >
                      <div className="flex gap-x-4">
                        <img
                          className="h-12 w-12 flex-none rounded-full bg-secondary"
                          src={person.imageUrl}
                          alt=""
                        />
                        <div className="min-w-0 flex-auto">
                          <p className="font-semibold leading-6 text-primary">
                            Enviaste una solicitud a "{person.name}"
                          </p>
                          <p className="mt-1 truncate text-sm leading-5 text-secondary">
                            Enviado el {person.dateCreation}
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">
                          Tipo de Sangre: {person.bloodType}
                        </p>
                        {person.status === 'Enviada' ? (
                          <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-blue-500/20 p-1">
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            </div>
                            <p className="text-sm leading-5 text-secondary">
                              Solicitud Enviada
                            </p>
                          </div>
                        ) : (
                          <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </div>
                            <p className="text-sm leading-5 text-secondary">
                              Solicitud Aceptada
                            </p>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
