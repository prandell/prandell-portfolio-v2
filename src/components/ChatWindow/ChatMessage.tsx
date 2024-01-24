import React from 'react'
import { TypingDots } from './ChatMessage.styles'

export interface IChatMessage {
  message: string
  isPb: boolean
  loading?: boolean
}

const MessageFill: React.FC<IChatMessage> = ({ message, isPb, loading }) => {
  return (
    <p className="flex w-fit max-w-[80%] justify-end bg-secondary py-3 px-3 rounded-2xl">
      {loading ? <TypingDots /> : `${message}`}
    </p>
  )
}

const ChatMessage: React.FC<IChatMessage> = ({ message, isPb, loading }) => {
  return (
    <div
      className={`flex text-primary flex-row gap-3 justify-${
        isPb ? 'left' : 'end'
      } items-center`}
    >
      {!isPb && <MessageFill isPb={isPb} message={message} loading={loading} />}

      <p className="flex text-center justify-center items-center bg-amber-400 rounded-full w-[42px] h-[42px]">
        {isPb ? '\uD83E\uDD16' : '\uD83D\uDC7E'}
      </p>
      {isPb && <MessageFill isPb={isPb} message={message} loading={loading} />}
    </div>
  )
}

export default ChatMessage
