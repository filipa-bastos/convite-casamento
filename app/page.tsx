'use client';

import { useState, useRef, useEffect } from 'react';
import Envelope from './components/envelope';
import VideoHero from './components/Video';
import RSVPForm from './components/Form';
import Countdown from './components/Countdown';
import Localizacao from './components/Localizacao';
import CronogramaNovo from './components/CronogramaNovo';
import Alojamento from './components/Alojamento';

export default function WeddingInvite() {
  const [isOpen, setIsOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'auto';
    };
  }, []);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowVideo(true);
      document.body.style.overflowY = 'auto';
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          videoRef.current!.muted = true;
          videoRef.current?.play();
        });
      }
    }, 1000); 
  };

  return (
    <main>
      <Envelope isOpen={isOpen} onOpen={handleOpenEnvelope} />

      <section className={`main-content ${showVideo ? 'show' : ''}`} id="vid-section">
        <VideoHero videoRef={videoRef} />
        <Countdown />
        <Localizacao />
        <CronogramaNovo />
        <Alojamento />
        <RSVPForm />
        
      </section>
    </main>
  );
}