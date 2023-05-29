import {ChatLink} from './chat-link'

interface ChatListTreeProps {
  level?: number
}

export function ChatListTree({level = 0}: ChatListTreeProps) {
  const messages = [
    {
      name: 'Russel Crowe',
      message: 'Este es un mensaje de prueba',
      dateCreation: '11:19 A.M.',
      isActive: true,
    },
    {
      name: 'Ivana Alarcón',
      message: 'Este es otro un mensaje de prueba',
      dateCreation: '13:19 P.M.',
      isActive: false,
    },
  ]
  return (
    <>
      <div className="mb-1 ml-5 w-full">
        <input
          type="text"
          name=""
          id=""
          placeholder="Buscar conversación"
          className="form-input"
        />
      </div>

      <ul>
        {messages?.map((message, index) => (
          <li key={index} className="mb-2 ml-5 mt-4 border-b border-border">
            <ChatLink message={message} isActive={message.isActive} />
          </li>
        ))}
      </ul>
    </>
  )
}
