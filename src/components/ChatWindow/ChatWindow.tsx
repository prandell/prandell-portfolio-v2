import React, { useCallback, useRef, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import ChatMessage from './ChatMessage'
import type { IChatMessage } from './ChatMessage'
import { askPatbot, type AskPatbotResponse } from '../../features/chat/ai.service'
import { copy } from '../../lib/copy'
import { styles, panels, inputs } from '../../config/styles'
import { BrutalButton, DialogChip } from '../ui'
import SectionWrapper from '../SectionWrapper/SectionWrapper'

const defaultMessage: IChatMessage = {
  message: copy.chat.defaultMessage,
  isPb: true
}

const ChatWindow: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const launchInputRef = useRef<HTMLInputElement | null>(null)

  const [open, setOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<IChatMessage[]>([defaultMessage])
  const [loading, setLoading] = useState(false)

  const sendQuestion = useCallback(
    (rawQuestion: string) => {
      const nextQuestion = rawQuestion.trim()
      if (!nextQuestion || loading) {
        return
      }

      setQuestion('')
      setLoading(true)

      setMessages((current) => [
        ...current,
        { message: nextQuestion, isPb: false },
        { message: '', isPb: true, loading: true }
      ])

      askPatbot(nextQuestion).then((m?: AskPatbotResponse) => {
        setMessages((current) => {
          const withoutLoader = current.filter((message) => !message.loading)
          return [
            ...withoutLoader,
            {
              message: m?.data ?? copy.chat.fallbackResponse,
              isPb: true
            }
          ]
        })
        setLoading(false)
      })
    },
    [loading]
  )

  const handleSubmit = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault()
      sendQuestion(question)
    },
    [question, sendQuestion]
  )

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>{copy.chat.panelSubheading}</p>
        <h2 className={styles.sectionHeadText}>{copy.chat.panelHeading}</h2>
      </div>

      <div className={`${panels.ink} mt-4 px-4 py-4 sm:px-6 sm:py-5`}>
        <p className="text-[16px] leading-[1.7] text-[#ddd8cf]">
          {copy.chat.panelDescription}
        </p>

        <input
          ref={launchInputRef}
          type="text"
          readOnly
          value=""
          onFocus={() => {
            setOpen(true)
            window.setTimeout(() => launchInputRef.current?.blur(), 10)
          }}
          onClick={() => setOpen(true)}
          placeholder={copy.chat.inputPlaceholder}
          className={`${inputs.contact} mt-7 min-h-[68px] px-6 py-5 text-xl placeholder:text-[#6d685f]`}
        />
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-60 bg-[rgba(8,8,8,0.78)] backdrop-blur-[2px]" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-65 w-[min(880px,calc(100%-28px))] max-h-[calc(100vh-36px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-[#141414] p-5 shadow-[12px_12px_0_#070707] max-md:w-[calc(100%-20px)] max-md:max-h-[calc(100vh-20px)] max-md:p-3.5">
            <div className="flex items-center justify-between gap-3">
              <Dialog.Title className="font-display text-[24px] uppercase tracking-[0.06em] text-[#f0ece3]">
                {copy.chat.dialogTitle}
              </Dialog.Title>
              <Dialog.Close asChild>
                <button
                  className="border border-white/24 bg-[#171717] px-2.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#ece8df]"
                  type="button"
                >
                  {copy.chat.closeLabel}
                </button>
              </Dialog.Close>
            </div>

            <p className="font-mono mt-1 text-[10px] uppercase tracking-[0.18em] text-[#b4aea2]">
              {copy.chat.dialogSubheading}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {copy.chat.sampleQuestions.map((sample) => (
                <DialogChip key={sample} onClick={() => sendQuestion(sample)}>
                  {sample}
                </DialogChip>
              ))}
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-5 flex flex-col gap-4"
            >
              <div className="flex h-80 max-md:h-[280px] flex-col gap-2.5 overflow-y-auto bg-[#0f0f0f] p-3.5">
                {messages.map((cm, i) => (
                  <ChatMessage
                    message={cm.message}
                    key={i}
                    isPb={cm.isPb}
                    loading={cm.loading}
                  />
                ))}
              </div>

              <div className="flex items-end gap-3">
                <textarea
                  rows={3}
                  name="message"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.shiftKey && e.key === 'Enter') {
                      return
                    }
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      handleSubmit(e)
                    }
                  }}
                  placeholder={copy.chat.dialogInputPlaceholder}
                  className={inputs.dialog}
                />
                <BrutalButton as="button" type="submit" className="px-4 py-2 text-[10px] leading-none">
                  {loading ? copy.chat.sendingLabel : copy.chat.sendLabel}
                </BrutalButton>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default SectionWrapper(ChatWindow, 'assistant')
