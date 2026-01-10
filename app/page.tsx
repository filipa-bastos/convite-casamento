'use client'
import Image from 'next/image'
import { submeterConfirmacao } from '@/app/actions'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfcf8] flex flex-col items-center justify-center p-4 text-[#161616]">

      {/* Background image*/}
      <div className="relative w-full h-[400px] mb-6 overflow-hidden rounded-2xl">
          <Image src="/avo.jpeg" alt="Foto dos do lenço" fill className="object-cover" priority ></Image>
      </div>
      {/* Confirmation form*/}
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-sm border border-zinc-100">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif mb-2">João & Maria</h1>
          <p className="opacity-50 uppercase tracking-widest text-xs">Confirmação de Presença</p>
        </div>
        
        <form action={async (formData: FormData) => {
            // Aqui chamamos a função, mas o formulário não se importa com o que ela devolve
            await submeterConfirmacao(formData);
            // Opcional: pode adicionar um alerta aqui
            alert("Obrigado pela confirmação!");
          }} 
          className="space-y-6"
        >
          <div>
            <label className="block text-xs font-bold uppercase mb-2 opacity-70">Nome Completo</label>
            <input 
              name="nome" 
              required 
              className="w-full p-4 rounded-xl border border-zinc-100 bg-zinc-50 outline-none focus:border-[#161616] transition-all"
            />
          </div>
          
          <div className="flex gap-3">
            <label className="flex-1 border border-zinc-100 p-4 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all text-center has-[:checked]:bg-[#161616] has-[:checked]:text-white">
              <input type="radio" name="confirmacao" value="sim" defaultChecked className="hidden" />
              <span className="text-sm font-bold">Vou com certeza</span>
            </label>
            <label className="flex-1 border border-zinc-100 p-4 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all text-center has-[:checked]:bg-[#161616] has-[:checked]:text-white">
              <input type="radio" name="confirmacao" value="nao" className="hidden" />
              <span className="text-sm font-bold">Não consigo ir</span>
            </label>
          </div>

          <button type="submit" className="w-full bg-[#161616] text-white p-5 rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-zinc-200">
            Confirmar Agora
          </button>
        </form>
      </div>
    </main>
  )
}