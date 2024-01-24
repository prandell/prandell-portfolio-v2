import React from 'react'

export interface IChatMessage {
  message: string
  isPb: boolean
}

const ChatMessage: React.FC<IChatMessage> = ({ message, isPb }) => {
  return (
    <div
      className={`flex text-primary flex-row gap-3 justify-${
        isPb ? 'left' : 'end'
      } items-center`}
    >
      {!isPb && (
        <p className="flex w-fit max-w-[80%] justify-end bg-secondary py-3 px-3 rounded-2xl">
          {message}
        </p>
      )}

      <p className="flex text-center justify-center items-center bg-amber-400 rounded-full w-[42px] h-[42px]">
        {isPb ? '\uD83E\uDD16' : '\uD83D\uDC7E'}
      </p>

      {isPb && (
        <p className="flex w-fit max-w-[80%] justify-end bg-secondary py-3 px-3  rounded-2xl">
          {message}
        </p>
      )}
    </div>
  )
}

export default ChatMessage
