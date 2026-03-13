'use client';

import { RefObject } from 'react';

interface VideoHeroProps {
  videoRef: RefObject<HTMLVideoElement | null>;
}

export default function VideoHero({ videoRef }: VideoHeroProps) {
  return (
    <div className="video-hero">
      <video 
        ref={videoRef} 
        id="my-video" 
        src="/video.mp4" 
        playsInline 
        loop
      ></video>
      <div className="content-text">
        <p>Bem-vindos ao nosso dia</p>
      </div>
    </div>
  );
}