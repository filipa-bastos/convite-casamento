'use client';

import { useRef, useState } from 'react';

interface IntroEnvelopeProps {
  onFinish: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isFading: boolean;
}

export default function IntroEnvelope({ onFinish, audioRef, isFading }: IntroEnvelopeProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStart = () => {
    if (hasStarted) return;
    setHasStarted(true);

    // 1. Tocar a música com proteção extra (audioRef?.current)
    // O "?" garante que se não houver áudio, ele simplesmente ignora em vez de crashar
    if (audioRef?.current) {
      audioRef.current.play().catch(err => console.log("Erro ao tocar áudio:", err));
    }

    // 2. Tocar o vídeo do envelope
    if (videoRef?.current) {
      videoRef.current.play().catch(err => console.log("Erro ao tocar vídeo:", err));
    }

    // 3. Avisar o componente pai
    // Nota: Se o teu vídeo dura 2s, chamamos o onFinish logo ou com delay? 
    // Como queres que a opacity do fundo comece a mudar logo, podemos chamar onFinish() já.
    onFinish();
  };

  return (
    <div 
      onClick={handleStart}
      className={`hide-scrollbar intro-envelope fixed inset-0 z-[100] flex items-center justify-center bg-[#F0EDE2] cursor-pointer transition-opacity duration-1000 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        src="/envelope-abrir.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        muted={false}
      />
      
      {/* Pequena dica: Se o vídeo ainda não começou, podes querer um texto por cima */}
      {!hasStarted && (
        <div className="relative z-10 text-[#6b755d] font-lovely text-4xl animate-pulse">
          Toca para abrir
        </div>
      )}
    </div>
  );
}