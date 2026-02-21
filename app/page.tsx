'use client'; // Necessário no Next.js App Router para usar hooks como useState e useRef

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { submeterConfirmacao } from '@/app/actions';


export default function WeddingInvite() {
  // 1. Estados para o Envelope e Vídeo
  const [isOpen, setIsOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);

  // 2. Bloquear o scroll inicial
  useEffect(() => {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'hidden';

      return () => {
          document.body.style.overflowY = 'auto';
          document.body.style.overflowX = 'auto';
      };
  }, []);

  // 3. Abrir o envelope e transitar para o vídeo
  const handleOpenEnvelope = () => {
      setIsOpen(true);

      setTimeout(() => {
          setShowVideo(true);
          
          // Desbloqueia o scroll para permitir ver os detalhes e o formulário
          document.body.style.overflowY = 'auto';
          
          if (videoRef.current) {
              videoRef.current.play().catch(error => {
                  console.log("Autoplay bloqueado.", error);
                  if (videoRef.current) {
                      videoRef.current.muted = true;
                      videoRef.current.play();
                  }
              });
          }
      }, 1500); 
  };

  return (
      <main>
          {/* --- SECÇÃO DO ENVELOPE --- */}
          <section className="envelope-section">
              <div className="cssletter">
                  <div className={`envelope ${isOpen ? 'active' : ''}`}>
                      <div className="inner-light"></div>
                      <div className="envelope-flap">
                          <div className="flap-triangle"></div>
                          <button 
                              className="open-btn" 
                              id="openEnvelope" 
                              aria-label="Open Envelope"
                              onClick={handleOpenEnvelope}
                          ></button>
                      </div>
                      <div className="envelope-folds"></div>
                  </div>
              </div>
          </section>

          {/* --- SECÇÃO PRINCIPAL (Vídeo + Detalhes + Formulário) --- */}
          <section className={`main-content ${showVideo ? 'show' : ''}`} id="vid-section">
              
              {/* 1º Ecrã: O Vídeo Hero */}
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

              {/* 2º Ecrã: Os Detalhes do Casamento (O Cartão Elegante) */}
              <div className="info-section">
                  <div className="wedding-invite-card">
                      <span className="bg-letter m-letter">M</span>
                      
                      <div className="invite-details">
                          <h2 className="couple-names">MARIA & JOÃO</h2>
                          
                          <div className="invite-datetime">
                              <p>4 | OUTUBRO | 2026</p>
                              <p className="invite-time">14H30</p>
                          </div>
                          
                          <div className="invite-location">
                              <p className="venue-name">QUINTA DO PAÇO HOTEL</p>
                              <p className="venue-address">ESTRADA NACIONAL 322, KM3, 5000-051 VILA REAL</p>
                          </div>
                      </div>

                      <span className="bg-letter j-letter">J</span>
                  </div>
              </div>

              {/* 3º Ecrã: O Formulário de Confirmação (RSVP) */}
              {/* Usamos o teu código exato com as classes Tailwind */}
              <div className="min-h-screen bg-[#fdfcf8] flex flex-col items-center justify-center p-4 text-[#161616]">
                  
                  {/* Imagem de Fundo do Formulário */}
                  <div className="relative w-full max-w-md h-[400px] mb-6 overflow-hidden rounded-2xl">
                      <Image 
                          src="/avo.jpeg" 
                          alt="Foto dos do lenço" 
                          fill 
                          className="object-cover" 
                          priority 
                      />
                  </div>
                  
                  {/* Caixa do Formulário */}
                  <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-sm border border-zinc-100">
                      <div className="text-center mb-10">
                          <h1 className="text-3xl font-serif mb-2">João & Maria</h1>
                          <p className="opacity-50 uppercase tracking-widest text-xs">Confirmação de Presença</p>
                      </div>
                      
                      <form 
                          action={async (formData: FormData) => {
                              await submeterConfirmacao(formData);
                              alert("Obrigado pela confirmação!");
                          }} 
                          className="space-y-6"
                      >
                          <div>
                              <label className="block text-xs font-bold uppercase mb-2 opacity-70">Nome Completo</label>
                              <input 
                                  name="nome" 
                                  required 
                                  className="w-full p-4 rounded-xl border border-zinc-100 bg-zinc-50 outline-none focus:border-[#161616] transition-all"
                              />
                          </div>
                          
                          <div className="flex gap-3">
                              <label className="flex-1 border border-zinc-100 p-4 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all text-center has-[:checked]:bg-[#161616] has-[:checked]:text-white">
                                  <input type="radio" name="confirmacao" value="sim" defaultChecked className="hidden" />
                                  <span className="text-sm font-bold">Vou com certeza</span>
                              </label>
                              <label className="flex-1 border border-zinc-100 p-4 rounded-xl cursor-pointer hover:bg-zinc-50 transition-all text-center has-[:checked]:bg-[#161616] has-[:checked]:text-white">
                                  <input type="radio" name="confirmacao" value="nao" className="hidden" />
                                  <span className="text-sm font-bold">Não consigo ir</span>
                              </label>
                          </div>

                          <button type="submit" className="w-full bg-[#161616] text-white p-5 rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-zinc-200">
                              Confirmar Agora
                          </button>
                      </form>
                  </div>
              </div>

          </section>
      </main>
  );
}