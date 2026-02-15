import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import SectionWrapper from './SectionWrapper/SectionWrapper'

import { styles } from '../config/styles'
import { TransitionDirection, slideIn } from '../lib/motion'
import { GithubIconLink, LinkedInIconLink } from './Icons'
import ChatWindow from './ChatWindow/ChatWindow'

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
            to_name: 'Patrick Randell',
            from_email: form.email,
            to_email: 'patch.800@hotmail.com',
            message: form.message
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false)
            alert('Thank you. I will get back to you as soon as possible.')

            setForm({
              name: '',
              email: '',
              message: ''
            })
          },
          (error) => {
            setLoading(false)
            console.error(error)

            alert('Ahh, something went wrong. Please try again.')
          }
        )
    }
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn(TransitionDirection.LEFT, 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Obi-wan Kenobi"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary placeholder:text-opacity-50 text-white rounded-lg outline-none border-none "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="obi-wan-kenobi@jedi-council.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary placeholder:text-opacity-50 text-white rounded-lg outline-none border-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white mb-4">Your Message</span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hello there!"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary placeholder:text-opacity-50 text-white rounded-lg outline-none border-none"
            />
          </label>

          <div className="flex flex-row justify-between">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white shadow-md shadow-primary"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
            <div className="flex items-center gap-1">
              <a
                className="flex justify-center h-[40px] w-[40px]"
                target="_blank"
                href="https://www.linkedin.com/in/randellp/"
              >
                <LinkedInIconLink size={30} />
              </a>
              <a
                className="flex justify-center h-[40px] w-[40px]"
                target="_blank"
                href="https://github.com/prandell"
              >
                <GithubIconLink size={30} />
              </a>
            </div>
          </div>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn(TransitionDirection.RIGHT, 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div> */}
      <ChatWindow />
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
