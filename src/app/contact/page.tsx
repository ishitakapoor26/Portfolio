"use client";
import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const handleSubmit = async (e: any) =>{
    e.preventDefault()
    setStatus('sending')
    const form = new FormData(e.target)
    const data = Object.fromEntries(form.entries())
    try{
      const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type':'application/json' } })
      if(res.ok) setStatus('sent')
      else setStatus('error')
    }catch(err){ setStatus('error') }
  }

  return (
    <section className="py-20 container">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl grid gap-4">
        <input name="name" placeholder="Your name" className="border p-3 rounded" required />
        <input name="email" placeholder="Email" className="border p-3 rounded" required />
        <textarea name="message" placeholder="Message" className="border p-3 rounded h-36" required />
        <button type="submit" className="btn btn-primary">Send</button>
        {status === 'sent' && <div className="text-sm text-green-600">Thanks — message sent.</div>}
        {status === 'error' && <div className="text-sm text-red-600">Something went wrong. Try again later.</div>}
      </form>
    </section>
  )
}