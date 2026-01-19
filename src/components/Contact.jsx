import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  function update(e){
    setForm(prev=>({ ...prev, [e.target.name]: e.target.value }))
  }

  function submit(e){
    e.preventDefault()
    // Basic client-side handling: open mailto as fallback
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:youremail@example.com?subject=${encodeURIComponent('Portfolio contact')}&body=${body}`
    setStatus('sent')
  }

  return (
    <motion.div className="py-6 md:py-10">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        <motion.input whileFocus={{ scale: 1.01 }} name="name" value={form.name} onChange={update} required placeholder="Your name" className="p-3 rounded border" />
        <motion.input whileFocus={{ scale: 1.01 }} name="email" value={form.email} onChange={update} required type="email" placeholder="you@example.com" className="p-3 rounded border" />
        <motion.textarea whileFocus={{ scale: 1.01 }} name="message" value={form.message} onChange={update} required placeholder="Message" rows={6} className="p-3 rounded border md:col-span-2" />
        <div className="md:col-span-2">
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
          {status === 'sent' && <span className="ml-3 text-sm text-green-600">Opened mail client</span>}
        </div>
      </form>
    </motion.div>
  )
}
