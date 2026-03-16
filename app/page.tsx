'use client';

import { useState, useRef, useEffect } from 'react';
import IntroEnvelope from './components/IntroEnvelope';
import VideoHero from './components/Video';
import RSVPForm from './components/Form';
import Countdown from './components/Countdown';
import Localizacao from './components/Localizacao';
import CronogramaNovo from './components/CronogramaNovo';
import Alojamento from './components/Alojamento';
import Footer from './components/Footer';

export default function WeddingInvite() {
  const [showContent, setShowContent] = useState(false); 
  const [isIntroFinished, setIsIntroFinished] = useState(false); 
  
  const videoHeroRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Evita o salto lateral reservando o espaço do scroll
    document.documentElement.style.scrollbarGutter = 'stable';

    if (!showContent) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('hide-scrollbar');
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.classList.remove('hide-scrollbar');
    }
  }, [showContent]);

  const handleFinishIntro = () => {
    // Inicia o fade-in do conteúdo e o fade-out do envelope
    setShowContent(true);
    
    // Toca o vídeo da Hero Section
    if (videoHeroRef.current) {
      videoHeroRef.current.play().catch(() => {
        videoHeroRef.current!.muted = true;
        videoHeroRef.current?.play();
      });
    }

    // Remove o envelope do DOM após 1 segundo (tempo da transição)
    setTimeout(() => {
      setIsIntroFinished(true);
    }, 1000);
  };

  return (
    <main className="relative w-full bg-[#F0EDE2]">
      {/* Garante que o ficheiro na public se chama musica.mp3 */}
      <audio ref={audioRef} src="/musica.mp3" loop preload="auto" />

      <section 
        className={`transition-opacity duration-1000 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <VideoHero videoRef={videoHeroRef} />
        <Countdown />
        <Localizacao />
        <CronogramaNovo />
        <Alojamento />
        <RSVPForm />
        <Footer />
      </section>

      {!isIntroFinished && (
        <IntroEnvelope 
          onFinish={handleFinishIntro} 
          audioRef={audioRef} 
          isFading={showContent} 
        />
      )}
    </main>
  );
}