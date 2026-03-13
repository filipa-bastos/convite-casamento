'use client';

import React from 'react';
import { 
  LuChurch, 
  LuHeart, 
  LuCamera, 
  LuUtensils, 
  LuMusic, 
  LuCoffee 
} from 'react-icons/lu';

interface Evento {
  id: number;
  icone: React.ReactNode;
  horario: string;
  descricao: string;
}

export default function CronogramaDia() {
  const eventos: Evento[] = [
    { id: 1, icone: <LuChurch size={40} strokeWidth={1.2} />, horario: '14h', descricao: 'CERIMÓNIA' },
    { id: 2, icone: <LuHeart size={40} strokeWidth={1.2} />, horario: '15h', descricao: 'ALIANÇAS' },
    { id: 3, icone: <LuCamera size={40} strokeWidth={1.2} />, horario: '16h', descricao: 'FOTOS' },
    { id: 4, icone: <LuCoffee size={40} strokeWidth={1.2} />, horario: '18h', descricao: 'ENTRADAS' },
    { id: 5, icone: <LuMusic size={40} strokeWidth={1.2} />, horario: '20h', descricao: 'FESTA' },
    { id: 6, icone: <LuUtensils size={40} strokeWidth={1.2} />, horario: '22h', descricao: 'JANTAR' },
  ];

  return (
    <section className="bg-[#a6a89a] py-24 px-4 min-h-screen flex flex-col items-center overflow-hidden">
      
      <h2 className="text-4xl md:text-5xl font-serif text-[#e8e9e6] mb-24 tracking-[0.2em] text-center uppercase">
        Cronograma do Dia
      </h2>

      <div className="relative w-full max-w-xl">
        
        {/* LINHA VERTICAL CENTRAL (2px) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#3e4741]/60" />

        <div className="space-y-1">
          {eventos.map((evento, index) => {
            // isLeft define se a informação aparece à esquerda da linha vertical
            const isLeft = index % 2 === 0;
            
            return (
              <div key={evento.id} className="relative flex items-center justify-center">
                
                {/* Contentor Principal */}
                <div className={`flex w-full items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  
                  {/* Bloco de Informação */}
                  <div className={`w-1/2 flex flex-col items-center gap-4 ${isLeft ? 'pr-10' : 'pl-10'}`}>
                    
                    {/* Ícone */}
                    <div className="text-[#3e4741] opacity-90">
                      {evento.icone}
                    </div>

                    {/* Texto */}
                    <div className="flex flex-col items-center">
                      <span className="text-xl font-light tracking-widest text-[#3e4741]">
                        {evento.horario}
                      </span>
                      <span className="text-xs font-extralight tracking-[0.3em] text-[#3e4741] uppercase mt-1 text-center">
                        {evento.descricao}
                      </span>
                    </div>
                  </div>

                  {/* Lado Vazio */}
                  <div className="w-1/2" />
                </div>

                {/* CONECTOR HORIZONTAL CORRIGIDO:
                    Se a info está à ESQUERDA (isLeft), a linha deve ir do centro para a ESQUERDA (right-1/2).
                    Se a info está à DIREITA (!isLeft), a linha deve ir do centro para a DIREITA (left-1/2).
                */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-10 h-[2px] bg-[#6b755d]/60 ${
                  isLeft 
                    ? 'right-1/2' // Estende-se para a esquerda a partir do meio
                    : 'left-1/2'  // Estende-se para a direita a partir do meio
                }`} />
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}