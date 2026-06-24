import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name || 'someone'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:hello@sudais.dev?subject=${subject}&body=${body}`
  }

  return (
    <section className='ContactSection' id='contact'>

      <div className='CTText'>
        <h2>Let's build something</h2>
        <p>Have a project in mind or just want to say hi? My inbox is always open.</p>
      </div>

      <div className='ContactGrid'>

        {/* LEFT — contact info */}
        <div className='ContactInfo'>

          <a className='contactRow' href='mailto:hello@sudais.dev'>
            <span className='contactIcon'>
              <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8'
                strokeLinecap='round' strokeLinejoin='round'>
                <rect x='2' y='4' width='20' height='16' rx='2' />
                <path d='m22 7-10 5L2 7' />
              </svg>
            </span>
            <span className='contactText'>
              <strong>Email</strong>
              <span>hello@sudais.dev</span>
            </span>
          </a>

          <a className='contactRow' href='https://github.com/sudais' target='_blank' rel='noreferrer'>
            <span className='contactIcon'>
              <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8'
                strokeLinecap='round' strokeLinejoin='round'>
                <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
              </svg>
            </span>
            <span className='contactText'>
              <strong>GitHub</strong>
              <span>github.com/sudais</span>
            </span>
          </a>

          <a className='contactRow' href='https://linkedin.com/in/muhammad-sudais' target='_blank' rel='noreferrer'>
            <span className='contactIcon'>
              <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8'
                strokeLinecap='round' strokeLinejoin='round'>
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                <rect x='2' y='9' width='4' height='12' />
                <circle cx='4' cy='4' r='2' />
              </svg>
            </span>
            <span className='contactText'>
              <strong>LinkedIn</strong>
              <span>in/muhammad-sudais</span>
            </span>
          </a>

          <div className='availBadge'>
            <span className='availDot'></span>
            Currently available for new projects
          </div>

        </div>

        {/* RIGHT — form */}
        <form className='ContactForm' onSubmit={handleSubmit}>

          <label>
            Name
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Your name'
              required
            />
          </label>

          <label>
            Email
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='you@example.com'
              required
            />
          </label>

          <label>
            Message
            <textarea
              name='message'
              rows='5'
              value={form.message}
              onChange={handleChange}
              placeholder='Tell me about your project...'
              required
            />
          </label>

          <button type='submit'>Send Message</button>

        </form>

      </div>

    </section>
  )
}

export default Contact