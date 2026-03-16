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

    // 1. Tocar a música (desbloqueada pelo clique)
    if (audioRef && audioRef.current) {
      audioRef.current.play().catch(err => console.log("Erro ao tocar áudio:", err));
    }

    // 2. Tocar o vídeo do envelope
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Erro ao tocar vídeo:", err));
    }

    // 3. Avisar o componente pai que a animação começou
    // Esperamos os 2 segundos do vídeo antes de iniciar o fade out
    setTimeout(() => {
      onFinish();
    }, 2000);
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
        muted={false} // Se o vídeo tiver som próprio de papel a rasgar, ele tocará aqui
      />

    </div>
  );
}