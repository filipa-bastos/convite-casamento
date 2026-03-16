'use client';

import { RefObject } from 'react';
import { LuChevronDown, LuSprout } from 'react-icons/lu'; // Importei o ícone

interface VideoHeroProps {
  videoRef: RefObject<HTMLVideoElement | null>;
}

export default function VideoHero({ videoRef }: VideoHeroProps) {
  return (
    <div className="video-hero relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* 1. O VÍDEO (Corrigido com autoPlay, muted e loop) */}
      <video 
        ref={videoRef} 
        id="my-video" 
        src="/video.mp4" 
        playsInline 
        loop 
        muted 
        autoPlay
        className="absolute inset-0 w-full h-full object-cover z-[1]"
      ></video>

      {/* Overlay para escurecer o vídeo (z-2) */}
      <div className="absolute inset-0 bg-black/50 z-[2]" />

      {/* 2. O CONTEÚDO TIPOGRÁFICO (Maria & João com Limoeiro) (z-10) */}
      <div className="relative z-[10] flex flex-col items-center justify-between h-full py-16 text-white text-center">
        
        {/* Bloco Superior e Central (Nomes, Separador e Data) */}
        <div className="flex flex-col items-center gap-8 mt-auto">
          
          {/* Frase Inicial */}
          <p className="font-sans text-xs md:text-sm font-light tracking-[0.5em] uppercase">
            Convite de casamento
          </p>

          {/* Os Nomes */}
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-lovely text-6xl md:text-8xl  ">
              Maria
            </h1>
            <span className="font-sans text-3xl md:text-4xl font-extralight py-2">&</span>
            <h1 className="font-lovely  text-6xl md:text-8xl ">
              João
            </h1>
          </div>

          {/* Separador com Limoeiro */}
          <div className="flex items-center gap-4 w-64 md:w-80">
            <div className="h-[1px] bg-white/30 flex-grow" />
            <span className="text-2xl">🍋</span> {/* Usei emoji ou podes usar LuSprout */}
            <div className="h-[1px] bg-white/30 flex-grow" />
          </div>

          {/* A Data */}
          <p className="font-sans text-lg md:text-xl font-light tracking-[0.3em] uppercase">
            04 de Outubro de 2026
          </p>
        </div>

        {/* Bloco Inferior (Seta Animada) */}
        <div className="flex flex-col items-center gap-4 mt-auto">
          <p className="font-sans text-[10px] md:text-xs font-light tracking-[0.4em] uppercase ">
            Confirma a tua presença
          </p>
          <div className="animate-bounce">
            <LuChevronDown size={32} strokeWidth={1} />
          </div>
        </div>

      </div>
    </div>
  );
}