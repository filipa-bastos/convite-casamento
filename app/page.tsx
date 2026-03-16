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
    // Aplicamos o gutter estável ao HTML para evitar o "shift"
    document.documentElement.style.scrollbarGutter = 'stable';

    if (!showContent) {
      document.body.style.overflow = 'hidden';
      // Adicionamos uma classe ao html ou body para esconder a barra visualmente
      document.documentElement.classList.add('hide-scrollbar');
    } else {
      document.body.style.overflow = 'auto';
      // Removemos a classe para a barra aparecer normalmente quando o site abre
      document.documentElement.classList.remove('hide-scrollbar');
    }
  }, [showContent]);

  const handleFinishIntro = () => {
    setShowContent(true);
    if (videoHeroRef.current) {
      videoHeroRef.current.play().catch(() => {
        videoHeroRef.current!.muted = true;
        videoHeroRef.current?.play();
      });
    }
    setTimeout(() => {
      setIsIntroFinished(true);
    }, 1000);
  };

  return (
    <main className="relative w-full bg-[#F0EDE2]">
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