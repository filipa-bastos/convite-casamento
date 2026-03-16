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
  const alergias = formData.get('alergias') as string // Novo
  const mensagem = formData.get('mensagem') as string // Novo
  
  // 1. Guarda no Supabase
  const { error } = await supabase.from('presencas').insert([
    { 
      nome_convidado: nome, 
      confirmado: vira,
      alergias: alergias || null, // Se estiver vazio, guarda null
      mensagem: mensagem || null  // Se estiver vazio, guarda null
    }
  ])

  if (error) {
    console.error('Erro Supabase:', error)
    return { success: false, message: 'Erro ao guardar na base de dados.' }
  }

  // 2. Envia Email de aviso para ti (Atualizado com os novos campos)
  try {
    await resend.emails.send({
      from: 'Casamento <onboarding@resend.dev>',
      to: ['filipabastossousa@gmail.com'],
      subject: `Nova resposta: ${nome}`,
      html: `
        <h2>Nova confirmação de presença!</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Vai?</strong> ${vira ? 'Sim, vou!' : 'Infelizmente não.'}</p>
        <p><strong>Alergias/Restrições:</strong> ${alergias || 'Nenhuma'}</p>
        <p><strong>Mensagem aos noivos:</strong> ${mensagem || 'Sem mensagem.'}</p>
      `
    })
  } catch (e) {
    console.error('Erro Resend:', e)
  }

  return { success: true, message: 'Enviado com sucesso!' }
}