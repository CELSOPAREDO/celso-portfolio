import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

// Initialize EmailJS
emailjs.init('1bts0OcPSyrAJtCdl')

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  function update(e){
    setForm(prev=>({ ...prev, [e.target.name]: e.target.value }))
  }

  async function submit(e){
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      // Replace with your EmailJS Service ID and Template ID
      const result = await emailjs.send(
        'service_sr91iif',
        'template_mnj9gyf',
        {
          to_email: 'paredocelso@gmail.com', // Your Gmail
          from_name: form.name,
          from_email: form.email,
          message: form.message
        }
      )

      if (result.status === 200) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div className="py-6 md:py-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact Me</h2>
        <div className="w-16 h-1 bg-blue-600 mb-8"></div>
      </motion.div>

      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        <motion.input 
          whileFocus={{ scale: 1.01 }} 
          name="name" 
          value={form.name} 
          onChange={update} 
          required 
          placeholder="Your name" 
          className="p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-600"
        />
        <motion.input 
          whileFocus={{ scale: 1.01 }} 
          name="email" 
          value={form.email} 
          onChange={update} 
          required 
          type="email" 
          placeholder="your@email.com" 
          className="p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-600"
        />
        <motion.textarea 
          whileFocus={{ scale: 1.01 }} 
          name="message" 
          value={form.message} 
          onChange={update} 
          required 
          placeholder="Your message..." 
          rows={6} 
          className="p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-600 md:col-span-2"
        />
        <div className="md:col-span-2">
          <button 
            type="submit" 
            disabled={loading}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition-colors disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <span className="ml-3 text-sm text-green-600">✓ Message sent successfully!</span>}
          {status === 'error' && <span className="ml-3 text-sm text-red-600">✗ Error sending message. Please try again.</span>}
        </div>
      </form>
    </motion.div>
  )
}
