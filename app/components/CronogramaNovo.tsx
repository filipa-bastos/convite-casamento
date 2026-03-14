'use client';

import React from 'react';
import { 
  LuHeart, 
  LuGlassWater, 
  LuSun, 
  LuUtensils, 
  LuCakeSlice,
  LuMusic
} from 'react-icons/lu';
import { FaGlassCheers} from 'react-icons/fa';


interface Evento {
  id: number;
  icone: React.ReactNode;
  horario: string;
  titulo: string;
}

export default function CronogramaNovo() {
  const eventos: Evento[] = [
    { id: 1, icone: <LuHeart size={28} strokeWidth={1.5} />, horario: '14:30', titulo: 'CERIMÓNIA' },
    { id: 2, icone: <FaGlassCheers size={28} />, horario: '16:00', titulo: 'COCKTAIL' },
    { id: 3, icone: <LuSun size={28} strokeWidth={1.5} />, horario: '18:00', titulo: 'SUNSET' },
    { id: 4, icone: <LuUtensils size={28} strokeWidth={1.5} />, horario: '20:00', titulo: 'JANTAR' },
    { id: 5, icone: <LuCakeSlice size={28} strokeWidth={1.5} />, horario: '23:00', titulo: 'CORTE DO BOLO' },
    { id: 6, icone: <LuMusic size={28} strokeWidth={1.5} />, horario: '00:00', titulo: 'FESTA' },
  ];

  return (
    <section className="bg-[#b3be9f] py-24 px-4 flex flex-col items-center overflow-hidden">
      

      {/* Imagem de Destaque */}
      <div className="mb-4">
        <img 
            src="/limoeiro.png" 
            alt="Decoração" 
            style={{ width: '90px', height: '90px' }}
            className=" object-contain"
        />
        </div>

      <h2 className="text-4xl md:text-5xl font-serif text-white mb-2 tracking-tight">
        Programa
      </h2>
      <p className="text-xs md:text-sm font-light tracking-[0.4em] uppercase text-white/80 mb-20">
        Uma ideia do que vai acontecer
      </p>

      {/* Contentor do Cronograma */}
      <div className="relative w-full max-w-2xl px-2">
        
        {/* LINHA VERTICAL (Mais grossa: 4px) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[4px] bg-white/20 rounded-full" />

        <div className="space-y-12">
          {eventos.map((evento, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div key={evento.id} className="relative flex items-center justify-center">
                
                {/* Contentor com estilo do Counter */}
                <div className={`flex w-full items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  
                  {/* BOX ESTILO COUNTER */}
                  <div className={`w-[45%] md:w-[42%] flex flex-row items-center gap-4 p-4 md:p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg transition-transform hover:scale-105 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                    
                    {/* Texto (Pill + Título) */}
                    <div className={`flex flex-col ${isLeft ? 'items-end' : 'items-start'}`}>
                      <span className="bg-[#58604c] text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-1 tracking-widest">
                        {evento.horario}
                      </span>
                      <span className="text-[#58604c] font-serif text-sm md:text-lg tracking-wide uppercase">
                        {evento.titulo}
                      </span>
                    </div>

                    {/* Ícone (Sempre mais perto da linha) */}
                    <div className={`text-white order-first ${isLeft ? 'order-last ml-2' : 'mr-2'}`}>
                      {evento.icone}
                    </div>
                  </div>

                  {/* Lado Vazio */}
                  <div className="w-[55%] md:w-[58%]" />
                </div>

                {/* CONECTOR HORIZONTAL (Grosso) */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-4 md:w-8 h-[3px] bg-white/30 ${
                  isLeft ? 'right-1/2' : 'left-1/2'
                }`} />
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}