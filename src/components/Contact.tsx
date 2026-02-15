import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import SectionWrapper from './SectionWrapper/SectionWrapper'
import { styles, panels, inputs } from '../config/styles'
import { GithubIconLink, LinkedInIconLink } from './Icons'
import { copy } from '../lib/copy'
import { BrutalButton } from './ui'

interface ContactFormState {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (
      import.meta.env.VITE_APP_EMAILJS_SERVICE_KEY &&
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_KEY &&
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ) {
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_KEY,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_KEY,
          {
            from_name: form.name,
            to_name: copy.nav.name,
            from_email: form.email,
            to_email: 'patch.800@hotmail.com',
            message: form.message
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false)
            alert(copy.contact.successMessage)

            setForm({
              name: '',
              email: '',
              message: ''
            })
          },
          (error) => {
            setLoading(false)
            console.error(error)

            alert(copy.contact.errorMessage)
          }
        )
    }
  }

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>{copy.contact.subheading}</p>
        <h2 className={styles.sectionHeadText}>{copy.contact.heading}</h2>
      </div>

      <div className={`${panels.cta} mt-4 px-4 py-4 sm:px-6 sm:py-5`}>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="font-mono mb-3 text-[11px] uppercase tracking-[0.18em] text-[#5c5851]">
              {copy.contact.nameLabel}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={copy.contact.namePlaceholder}
              className={`${inputs.cta} px-5 py-4`}
            />
          </label>
          <label className="flex flex-col">
            <span className="font-mono mb-3 text-[11px] uppercase tracking-[0.18em] text-[#5c5851]">
              {copy.contact.emailLabel}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={copy.contact.emailPlaceholder}
              className={`${inputs.cta} px-5 py-4`}
            />
          </label>
          <label className="flex flex-col">
            <span className="font-mono mb-3 text-[11px] uppercase tracking-[0.18em] text-[#5c5851]">
              {copy.contact.messageLabel}
            </span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={copy.contact.messagePlaceholder}
              className={`${inputs.cta} px-5 py-4`}
            />
          </label>

          <div className="flex flex-row items-center justify-between gap-4">
            <BrutalButton as="button" type="submit" className="px-4 py-2 text-[11px] leading-none">
              {loading ? copy.contact.sendingButton : copy.contact.sendButton}
            </BrutalButton>
            <div className="flex items-center gap-2">
              <a
                className="flex h-[40px] w-[40px] items-center justify-center bg-[#111]"
                target="_blank"
                rel="noreferrer"
                href={copy.contact.linkedInUrl}
              >
                <LinkedInIconLink size={24} />
              </a>
              <a
                className="flex h-[40px] w-[40px] items-center justify-center bg-[#111]"
                target="_blank"
                rel="noreferrer"
                href={copy.contact.githubUrl}
              >
                <GithubIconLink size={22} />
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, 'contact')
