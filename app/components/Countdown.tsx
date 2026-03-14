'use client';

import React, { useState, useEffect } from 'react';

// Box adaptada para ser fluida
const Box = ({ valor, rotulo }: { valor: number; rotulo: string }) => (
  <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg py-8 md:py-10 w-full transition-transform hover:scale-105">
    <span className="text-4xl md:text-6xl font-serif text-[#58604c]">
      {valor < 10 ? `0${valor}` : valor}
    </span>
    <span className="text-[10px] md:text-xs font-light tracking-[0.3em] uppercase text-[#1e2827]/70 mt-3">
      {rotulo}
    </span>
  </div>
);

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    const dataEvento = new Date('2026-10-04T14:30:00').getTime();
    const timer = setInterval(() => {
      const agora = new Date().getTime();
      const distancia = dataEvento - agora;
      if (distancia < 0) { clearInterval(timer); return; }

      setTimeLeft({
        dias: Math.floor(distancia / (1000 * 60 * 60 * 24)),
        horas: Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos: Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((distancia % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#b3be9f] py-24 px-6 flex flex-col items-center">
      <div className="text-center mb-16 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-serif text-[#fff] mb-4 tracking-tight">
          Cada vez mais perto do grande dia
        </h2>
        <p className="text-xs md:text-sm font-light tracking-[0.4em] uppercase text-[#fff]">
          A contagem decrescente começou
        </p>
      </div>

      {/* A GRID FLUIDA QUE VISTE */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-5xl">
        <Box valor={timeLeft.dias} rotulo="Dias" />
        <Box valor={timeLeft.horas} rotulo="Horas" />
        <Box valor={timeLeft.minutos} rotulo="Minutos" />
        <Box valor={timeLeft.segundos} rotulo="Segundos" />
      </div>
    </section>
  );
}