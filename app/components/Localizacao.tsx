'use client';

import React from 'react';
import Image from 'next/image';
import { LuMapPin, LuClock, LuExternalLink } from 'react-icons/lu';

export default function Localizacao() {
  const morada = "Estrada Nacional 322, km3, 5000-051 Vila Real";
  // Link para abrir diretamente no Google Maps (App ou Browser)
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(morada)}`;

  return (
    <section className="bg-white py-24 px-4 flex flex-col items-center">
      
      {/* Imagem de topo otimizada - Substituir o src pelo teu caminho real */}
      <div className="mb-6">
        <Image 
          src="/folhaOliveira.png" 
          alt="Ícone Detalhes"
          width={64}
          height={64}
          className="object-contain"
        />
      </div>

      <h2 className="text-4xl font-serif text-[#6b755d] mb-2 tracking-tight">
        Detalhes do dia
      </h2>
      <p className="text-sm font-light tracking-[0.2em] uppercase text-[#6b755d]/70 mb-12">
        Tudo o que precisas de saber
      </p>

      {/* Contentor Principal com Background Creme e Bordas */}
      <div className="w-full max-w-2xl mx-auto bg-[#fdfbf7] border border-[#b3be9f]/40 rounded-[8px] p-6 md:p-10 shadow-sm">
        
        <div className="flex flex-col items-center text-center">
          
          {/* Círculo Esverdeado com Pin */}
          <div className="w-14 h-14 bg-[#b3be9f] rounded-full flex items-center justify-center text-white mb-4 shadow-sm">
            <LuMapPin size={28} />
          </div>

          <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#b3be9f] mb-1">
            Localização
          </h3>
          
          <h4 className="text-2xl font-serif text-[#849072] mb-3">
            Arroios - Vila Real
          </h4>

          {/* Horário com Ícone de Relógio */}
          <div className="flex items-center gap-2 text-[#6b755d] mb-8 bg-[#b3be9f]/10 px-4 py-1 rounded-full">
            <LuClock size={16} />
            <span className="text-sm font-light">
              das 14:30 até às 04:00
            </span>
          </div>

          {/* Imagem do Local com Border Radius */}
          <div className="relative w-full h-64 mb-6">
            <Image 
              src="/FotoQuinta.jpeg" // Substituir pela tua imagem
              alt="Local do Casamento"
              fill
              className="object-cover rounded-[8px]"
            />
          </div>

          {/* Iframe do Google Maps */}
          <div className="w-full h-72 rounded-[8px] overflow-hidden border border-[#b3be9f]/20 mb-8">
            <iframe
              title="Mapa Localização"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.321!2d-7.728!3d41.300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzAwLjAiTiA3wrA0MSc0MC44Ilc!5e0!3m2!1spt!2spt!4v123456789"
            ></iframe>
          </div>

          {/* Botão Abrir Mapa */}
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#b3be9f] hover:bg-[#a6ae96] text-white px-10 py-4 rounded-full transition-all duration-300 shadow-md group"
          >
            <LuMapPin size={20} className="group-hover:scale-110 transition-transform" />
            <span className="font-sans text-sm font-bold uppercase tracking-widest">
              Abrir Mapa
            </span>
            <LuExternalLink size={16} className="opacity-60" />
          </a>
          <p className="text-sm font-light leading-relaxed text-[#6b755d]/80 mt-8 text-center max-w-2xl">
          Nota: A quinta dispõe de estacionamento no local para os convidados e pontos de carregamento para carros elétricos.
      </p>
        </div>
      </div>
    </section>
  );
}