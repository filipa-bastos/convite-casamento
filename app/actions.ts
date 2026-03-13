'use server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
const resend = new Resend(process.env.RESEND_API_KEY)

export async function submeterConfirmacao(formData: FormData) {
  const nome = formData.get('nome') as string
  const vira = formData.get('confirmacao') === 'sim'
  
  // 1. Guarda no Supabase
  const { error } = await supabase.from('presencas').insert([
    { nome_convidado: nome, confirmado: vira }
  ])

  if (error) {
    console.error('Erro Supabase:', error)
    return { success: false, message: 'Erro ao guardar na base de dados.' }
  }

  // 2. Envia Email de aviso para ti
  try {
    await resend.emails.send({
      from: 'Casamento <onboarding@resend.dev>',
      to: ['filipabastossousa@gmail.com','maria.troca13@gmail.com'], // COLOCA O TEU EMAIL AQUI
      subject: `Nova resposta: ${nome}`,
      html: `<p>O convidado <strong>${nome}</strong> respondeu: ${vira ? 'VOU!' : 'Não vou.'}</p>`
    })
  } catch (e) {
    console.error('Erro Resend:', e)
  }

  return { success: true, message: 'Enviado com sucesso!' }
}