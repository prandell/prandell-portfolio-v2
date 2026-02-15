import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../../config/styles'
import { TransitionDirection, fadeIn, slideIn } from '../../lib/motion'
import ChatMessage from './ChatMessage'
import type { IChatMessage } from './ChatMessage'
import { askPatbot, type AskPatbotResponse } from '../../features/chat/ai.service'

const placeholders = [
  'What front-end frameworks has Pat used?',
  'What back-end languages does Pat know?',
  'Has Pat presented to large audiences?',
  'What cloud experience does Pat have?',
  "What Anime's is Pat watching right now?",
  "What is Pat's favourite game right now?",
  "Does Pat have experience with LLM's?"
]

const defaultMessage: IChatMessage = {
  message: "Hi I'm Patbot! Ask me anything",
  isPb: true
}

const ChatWindow: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [question, setQuestion] = useState('')

  const [chatMessages, setChatMessages] = useState<IChatMessage[]>([
    defaultMessage
  ])

  const [placeholder, setPlaceholder] = useState(
    "Does Pat have experience with LLM's?"
  )

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value)
  }

  useEffect(() => {
    const id = setInterval(() => {
      setPlaceholder((p) => {
        const ind = placeholders.findIndex((v) => v === p)
        const newInd = (ind + 1) % placeholders.length
        return placeholders[newInd]
      })
    }, 3000)

    return () => {
      clearInterval(id)
    }
  }, [])

  const handleSubmit = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault()
      setQuestion('')
      setLoading(true)
      setChatMessages(() => {
        return [
          defaultMessage,
          { message: question, isPb: false },
          { message: '', isPb: true, loading: true }
        ]
      })
      askPatbot(question).then((m?: AskPatbotResponse) => {
        setChatMessages((cm) => [
          ...cm.slice(0, 2),
          { message: m?.data ?? 'Sorry, I could not retrieve a response.', isPb: true }
        ])
        setLoading(false)
      })
    },
    [question]
  )

  return (
    <motion.div
      variants={slideIn(TransitionDirection.RIGHT, 'tween', 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
    >
      <p className={styles.sectionSubText}>Ask me anything</p>
      <h3 className={styles.sectionHeadText}>Patbot</h3>

      <motion.p
        variants={fadeIn(TransitionDirection.NONE, '', 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Patbot is an AI chatbot trained on my personal and professional
        information. Ask Patbot anything about my interests, education, or work
        experience.
      </motion.p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-6 justify-between"
      >
        <div className="flex flex-col bg-tertiary py-8 px-8 rounded-lg h-[300px] w-[100%] gap-3 overflow-x-scroll">
          {chatMessages.map((cm, i) => (
            <ChatMessage
              message={cm.message}
              key={i}
              isPb={cm.isPb}
              loading={cm.loading}
            />
          ))}
        </div>
        <div className="flex flex-row justify-between items-center gap-3">
          <textarea
            rows={3}
            name="message"
            value={question}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.shiftKey && e.key === 'Enter') {
                return
              }
              if (e.key === 'Enter') {
                e.preventDefault()
                handleSubmit(e)
              }
            }}
            placeholder={placeholder}
            className="flex bg-tertiary py-4 px-6 w-[80%] placeholder:text-secondary placeholder:text-opacity-50 text-white rounded-lg outline-none border-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center bg-tertiary w-[60px] h-[60px] rounded-full outline-none  text-white shadow-md shadow-primary"
          >
            {loading ? '...' : '\u21b5'}
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default ChatWindow
