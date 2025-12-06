import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== 'POST') return res.status(405).end()
  const { name, email, message } = req.body
  if(!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

  try{
    await sgMail.send({
      to: process.env.CONTACT_EMAIL || 'you@example.com',
      from: process.env.SENDGRID_FROM || 'noreply@example.com',
      subject: `Contact form — ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
    })
    return res.status(200).json({ ok: true })
  }catch(err){
    console.error(err)
    return res.status(500).json({ error: 'Failed to send' })
  }
}