'use client';

import React from 'react';
import Image from 'next/image';
import { LuBed, LuMapPin, LuExternalLink } from 'react-icons/lu';

// 1. DEFINIÇÃO DOS DADOS (Podes adicionar mais aqui facilmente)
const hoteis = [
  {
    id: 1,
    nome: "Borralha Hotel, Restaurante & Spa",
    morada: "Avenida do Regimento de Infantaria 13 Lugar da Borralha, SN, 5000-423 Vila Real, Portugal",
    link: "https://www.booking.com/hotel/pt/borralha-guest-house.pt-pt.html?label=pt-pt-booking-desktop-OgnEMraTLetxQTshyAuElAS652828998886%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9196990%3Ali%3Adec%3Adm&aid=2311236&ucfs=1&checkin=2026-10-03&checkout=2026-10-05&dest_id=-2179752&dest_type=city&group_adults=2&no_rooms=1&group_children=0&srpvid=e19b84283fb40034&srepoch=1773514098&matching_block_id=228868405_99616148_2_1_0_880168&atlas_src=sr_iw_title&chal_t=1773519248537&force_referer=" // Teu link completo
  },
  {
    id: 2,
    nome: "Hotel Miracorgo",
    morada: "Avenida 1º de Maio, 76 a 78, 5000-651 Vila Real, Portugal",
    link: "https://www.booking.com/hotel/pt/miracorgo.pt-pt.html?label=pt-pt-booking-desktop-OgnEMraTLetxQTshyAuElAS652828998886%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9196990%3Ali%3Adec%3Adm&aid=2311236&ucfs=1&checkin=2026-10-03&checkout=2026-10-05&dest_id=-2179752&dest_type=city&group_adults=2&no_rooms=1&group_children=0&srpvid=e19b84283fb40034&srepoch=1773514098&matching_block_id=3972709_390054446_2_1_0_468914&atlas_src=sr_iw_title"
  },
  {
    id: 3,
    nome: "Casa dos Correios",
    morada: "Rua Dom António Valente da Fonseca, 1 Fração D, 5000-539 Vila Real, Portugal",
    link: "https://www.booking.com/hotel/pt/casa-dos-correios.pt-pt.html?label=pt-pt-booking-desktop-OgnEMraTLetxQTshyAuElAS652828998886%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9196990%3Ali%3Adec%3Adm&aid=2311236&ucfs=1&checkin=2026-10-03&checkout=2026-10-05&dest_id=-2179752&dest_type=city&group_adults=2&no_rooms=1&group_children=0&srpvid=e19b84283fb40034&srepoch=1773514098&matching_block_id=1085507501_406630545_2_2_0&atlas_src=sr_iw_title"
  },
  {
    id: 4,
    nome: "Residencial Clássico",
    morada: "Rua do Algarve, 3, 5000-543 Vila Real, Portugal",
    link: "https://www.booking.com/hotel/pt/residencial-cla-ssico.pt-pt.html?label=pt-pt-booking-desktop-OgnEMraTLetxQTshyAuElAS652828998886%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9196990%3Ali%3Adec%3Adm&aid=2311236&ucfs=1&checkin=2026-10-03&checkout=2026-10-05&dest_id=-2179752&dest_type=city&group_adults=2&no_rooms=1&group_children=0&srpvid=e19b84283fb40034&srepoch=1773514098&matching_block_id=62231309_91052324_2_1_0_498289&atlas_src=sr_iw_title"
  }
];

export default function Alojamento() {
  return (
    <section className="bg-white py-24 px-4 flex flex-col items-center">
      <div className="mb-6">
        <Image 
          src="/folhaOliveira.png" 
          alt="Ícone Folha"
          width={64}
          height={64}
          className="object-contain"
        />
      </div>

      <h2 className="text-4xl font-serif text-[#6b755d] mb-4 tracking-tight text-center">
        Alojamento
      </h2>
      
      <p className="text-m font-light leading-relaxed text-[#6b755d]/80 mb-16 text-center max-w-2xl">
      Para que possam aproveitar o dia ao máximo, sugerimos procurar alojamento em Vila Real, caso pretendam ficar pela zona.
      Deixamos abaixo algumas sugestões, mas sintam-se à vontade para procurar outras opções.
      </p>

      {/* 2. GRID PARA OS HOTÉIS (1 col em mobile, 2 cols em desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto px-[23px]">
        {hoteis.map((hotel) => (
          <div 
            key={hotel.id} 
            className="flex flex-col items-center text-center bg-[#fdfbf7] border border-[#b3be9f]/40 rounded-[8px] p-8 shadow-sm transition-hover hover:shadow-md"
          >
            {/* Ícone de Cama */}
            <div className="w-14 h-14 bg-[#b3be9f] rounded-full flex items-center justify-center text-white mb-6 shadow-sm">
              <LuBed size={28} />
            </div>

            <h3 className="text-xl md:text-2xl font-serif text-[#1e2827] mb-2 min-h-[3rem] flex items-center">
              {hotel.nome}
            </h3>

            <div className="flex items-center gap-2 text-[#6b755d] mb-8 min-h-[2.5rem]">
              
              <span className="text-sm font-light tracking-wide">
                {hotel.morada}
              </span>
            </div>

            <a 
              href={hotel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center gap-3 bg-[#b3be9f] hover:bg-[#a6ae96] text-white px-8 py-3 rounded-full transition-all duration-300 shadow-sm group"
            >
              <span className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Ver Alojamento
              </span>
              <LuExternalLink size={14} className="opacity-60" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}