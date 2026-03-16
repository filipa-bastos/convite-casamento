'use client';

import React from 'react';
import { submeterConfirmacao } from '@/app/actions';

export default function RSVPForm() {
  return (
    <section className="bg-[#b3be9f] py-24 px-[23px] flex flex-col items-center overflow-hidden">
      
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-16 flex flex-col items-center shadow-xl">
        
        <div className="mb-8">
          <img 
            src="/limoeiro.png" 
            alt="Decoração" 
            style={{ width: '90px', height: '90px' }}
            className="object-contain"
          />
        </div>

        <h2 className="text-3xl md:text-3xl font-serif text-white mb-3 tracking-tight max-w-[400px] text-center italic">
          Os melhores momentos da vida vivem-se com as pessoas certas!
        </h2>
        <p className="text-lg md:text-xl font-light text-white/80 mb-12 text-center">
          Por isso, gostaríamos muito de contar contigo.
        </p>

        <form 
          action={async (formData: FormData) => {
            await submeterConfirmacao(formData);
            alert("Obrigado pela confirmação!");
          }} 
          className="w-full space-y-6"
        >
          {/* Nome Completo */}
          <div>
            <label className="block text-[10px] font-bold uppercase mb-3 tracking-[0.2em] text-white/70 ml-1">
              Nome Completo
            </label>
            <input 
              name="nome" 
              required 
              placeholder="Escreve o teu nome aqui..."
              className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/30 outline-none focus:bg-white/20 focus:border-white/40 transition-all font-light"
            />
          </div>

          {/* Vou / Não Vou */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="group relative flex items-center justify-center p-4 rounded-xl border border-white/20 bg-white/5 cursor-pointer hover:bg-white/15 transition-all has-[:checked]:bg-[#3e4741] has-[:checked]:border-transparent">
              <input type="radio" name="confirmacao" value="sim" defaultChecked className="hidden" />
              <span className="text-xs font-bold uppercase tracking-widest text-white group-has-[:checked]:text-white">
                Vou com certeza
              </span>
            </label>

            <label className="group relative flex items-center justify-center p-4 rounded-xl border border-white/20 bg-white/5 cursor-pointer hover:bg-white/15 transition-all has-[:checked]:bg-[#3e4741] has-[:checked]:border-transparent">
              <input type="radio" name="confirmacao" value="nao" className="hidden" />
              <span className="text-xs font-bold uppercase tracking-widest text-white group-has-[:checked]:text-white">
                Não consigo ir
              </span>
            </label>
          </div>

          {/* Alergias ou Restrições (Opcional) */}
          <div>
            <label className="flex justify-between items-center mb-3 ml-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Alergias ou Restrições</span>
              <span className="text-[9px] uppercase tracking-widest text-white/40 italic">(Opcional)</span>
            </label>
            <input 
              name="alergias" 
              placeholder="Ex: vegetariano, alergia a marisco..."
              className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/30 outline-none focus:bg-white/20 focus:border-white/40 transition-all font-light"
            />
          </div>

          {/* Comentário para os noivos (Opcional) */}
          <div>
            <label className="flex justify-between items-center mb-3 ml-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Comentário para os noivos</span>
              <span className="text-[9px] uppercase tracking-widest text-white/40 italic">(Opcional)</span>
            </label>
            <textarea 
              name="mensagem" 
              rows={3}
              placeholder="Deixa aqui uma mensagem para nós..."
              className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/30 outline-none focus:bg-white/20 focus:border-white/40 transition-all font-light resize-none"
            />
          </div>

          {/* Botão de Submissão */}
          <button 
            type="submit" 
            className="w-full bg-[#3e4741] text-white p-5 rounded-xl font-bold uppercase tracking-[0.3em] text-xs hover:bg-[#2d342f] hover:scale-[1.01] active:scale-[0.98] transition-all shadow-lg !mt-10"
          >
            Confirmar Agora
          </button>

          <div className="mt-10 flex flex-col items-center gap-6 text-center">
            <div className="w-12 h-[1px] bg-white/20" />
            <p className="text-[14px] font-light leading-relaxed text-[#3e4741] italic max-w-[380px]">
              Para nos ajudar na organização, pedimos que cada convidado preencha este formulário individualmente.
            </p>
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full">
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#3e4741]">
                Confirmar até 1 de Junho
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}