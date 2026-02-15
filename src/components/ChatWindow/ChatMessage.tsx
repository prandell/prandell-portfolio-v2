import React from 'react'

import { copy } from '../../lib/copy'

export interface IChatMessage {
  message: string
  isPb: boolean
  loading?: boolean
}

const MessageFill: React.FC<Pick<IChatMessage, 'message' | 'loading' | 'isPb'>> = ({
  message,
  loading,
  isPb
}) => {
  return (
    <p
      className={`flex w-fit max-w-[85%] justify-end px-3 py-3 text-[13px] leading-[1.5] ${
        isPb
          ? 'bg-[#f2ede3] text-[#121212]'
          : 'bg-[#191919] text-[#f2ede3]'
      }`}
    >
      {loading ? <span className="typing-dots" /> : message}
    </p>
  )
}

const ChatMessage: React.FC<IChatMessage> = ({ message, isPb, loading }) => {
  return (
    <div
      className={`flex flex-row items-start gap-2 ${
        isPb ? 'justify-start' : 'justify-end'
      }`}
    >
      {!isPb && <MessageFill message={message} loading={loading} isPb={isPb} />}

      <p
        className={`font-mono flex h-[30px] w-[30px] items-center justify-center text-[9px] uppercase tracking-[0.1em] ${
          isPb ? 'bg-[#f2ede3] text-[#111]' : 'bg-[#1d1d1d] text-[#f2ede3]'
        }`}
      >
        {isPb ? copy.chat.aiLabel : copy.chat.youLabel}
      </p>

      {isPb && <MessageFill message={message} loading={loading} isPb={isPb} />}
    </div>
  )
}

export default ChatMessage
