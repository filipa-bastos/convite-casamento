'use client';

import React from 'react';
import Image from 'next/image';
import { LuPhone, LuHeart } from 'react-icons/lu';

export default function Footer() {
  return (
    <footer className="bg-[#fdfbf7] py-20 px-[23px] flex flex-col items-center border-t border-[#b3be9f]/20">
      
      {/* Logo Redondo / SVG */}
      <div className="mb-8 relative w-50 h-50">
        {/* Se for um SVG na pasta public, usa o caminho correto aqui */}
        <Image 
          src="/logo.png" 
          alt="Maria e João Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Frase dos Limões com a tua nova fonte Lovely May */}
      <p className="font-lovely text-4xl md:text-5xl text-[#6b755d] mb-12 text-center leading-tight">
      Os melhores momentos da vida vivem-se com as pessoas certas!
      </p>

      {/* Mensagem Intermédia */}
      <div className="text-center mb-10">
        <p className="text-[#6b755d]/80 font-light text-sm md:text-base italic">
          Qualquer dúvida, é só dizer. Estamos por aqui. 🤍
        </p>
      </div>

      {/* Contactos */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-16">
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b3be9f] mb-2">Noiva</span>
          <a href="tel:914430976" className="flex items-center gap-2 text-[#3e4741] hover:opacity-70 transition-opacity">
            <LuPhone size={14} />
            <span className="font-medium">Maria — 914 430 976</span>
          </a>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b3be9f] mb-2">Noivo</span>
          <a href="tel:914035029" className="flex items-center gap-2 text-[#3e4741] hover:opacity-70 transition-opacity">
            <LuPhone size={14} />
            <span className="font-medium">João — 914 035 029</span>
          </a>
        </div>
      </div>

      {/* Nota sobre o Estacionamento (Estilo discreto e elegante) */}
      <div className="max-w-md w-full border-t border-[#b3be9f]/30 pt-8 text-center">
        <p className="text-[11px] md:text-xs leading-relaxed text-[#6b755d]/60 font-light uppercase tracking-widest">
          Nota: A quinta dispõe de estacionamento no local para os convidados e pontos de carregamento para carros elétricos.
        </p>
      </div>

      {/* Assinatura final opcional */}
      <div className="mt-16 flex items-center gap-2 text-[#b3be9f]/40 text-[10px] uppercase tracking-tighter">
        <span>M & J</span>
        <LuHeart size={8} fill="currentColor" />
        <span>2026</span>
      </div>
    </footer>
  );
}