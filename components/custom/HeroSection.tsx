"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function LandingPage() {
  const [clickCount, setClickCount] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [showSpamWarning, setShowSpamWarning] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);
  const [spamMessageIndex, setSpamMessageIndex] = useState(0);
  const [spamAttempts, setSpamAttempts] = useState(0);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const spamWarningRef = useRef<NodeJS.Timeout | null>(null);
  const spamMessages = [
    "🚫 Ei, muito rápido!",
    "🐌 Devagar e sempre!",
    "⏰ Calma, não precisa correr",
    "🛑 Menos pressa, mais precisão",
    "🎯 Um clique de cada vez",
    `😅 ${spamAttempts > 5 ? `${spamAttempts} tentativas de spam!` : 'Respira e clica normal'}`
  ];

  useEffect(() => {
    if (clickCount > 0 && clickCount < 3 && !isSpinning) {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }

      resetTimeoutRef.current = setTimeout(() => {
        setClickCount(0);
        setLastClickTime(0);
        setSpamAttempts(0);
      }, 3000);
    }

    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
      if (spamWarningRef.current) {
        clearTimeout(spamWarningRef.current);
      }
    };
  }, [clickCount, isSpinning]);

  const handleInvalidClick = () => {
    setSpamAttempts(prev => prev + 1);

    setShouldShake(true);
    setTimeout(() => setShouldShake(false), 400);

    setSpamMessageIndex((prev) => (prev + 1) % spamMessages.length);
    setShowSpamWarning(true);
    if (spamWarningRef.current) {
      clearTimeout(spamWarningRef.current);
    }
    spamWarningRef.current = setTimeout(() => {
      setShowSpamWarning(false);
    }, 1500);
  };

  const handleImageClick = () => {
    const currentTime = Date.now();

    if (isSpinning || showLogo) {
      return;
    }

    if (currentTime - lastClickTime < 250) {
      handleInvalidClick();
      return;
    }

    if (showSpamWarning) {
      setShowSpamWarning(false);
      if (spamWarningRef.current) {
        clearTimeout(spamWarningRef.current);
      }
    }

    setLastClickTime(currentTime);
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    if (newCount >= 3) {
      if (showSpamWarning) {
        setShowSpamWarning(false);
        if (spamWarningRef.current) {
          clearTimeout(spamWarningRef.current);
        }
      }

      setIsSpinning(true);
      setShowLogo(true);

      setTimeout(() => {
        setIsSpinning(false);
        setTimeout(() => {
          setShowLogo(false);
          setClickCount(0);
          setLastClickTime(0);
          setSpamAttempts(0);
        }, 2000);
      }, 3000);
    }
  };

  return (
    <div id='hero' className="relative min-h-screen py-20">
      {/* Elementos decorativos sutis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-600/5 blur-[100px]" />
      </div>

      <div
        className="relative z-10 min-h-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-24 py-20"
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <div
            className={`relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] select-none transition-all duration-300 ${!isSpinning && !showLogo ? 'hover:scale-105 cursor-pointer' : 'cursor-default'
              } ${shouldShake ? 'animate-pulse' : ''} ${isSpinning ? 'animate-spin' : ''
              }`}
            onClick={handleImageClick}
          >
            {showSpamWarning && !isSpinning && !showLogo && (
              <div
                className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-30 opacity-100 scale-100"
              >
                <div className="bg-red-500/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                  <span className="text-white text-sm font-medium">
                    {spamMessages[spamMessageIndex]}
                  </span>
                </div>
              </div>
            )}

            {clickCount > 0 && clickCount < 3 && !showLogo && (
              <div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20 opacity-100 scale-100"
              >
                <div className="bg-purple-600/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 transition-all duration-300">
                  <span className="text-white text-sm font-medium">
                    {`${clickCount}/3 cliques`}
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${dot <= clickCount ? 'bg-white scale-110' : 'bg-white/30 scale-90'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {clickCount > 0 && clickCount < 3 && (
              <div
                className="absolute inset-0 rounded-full border-4 border-purple-400 pointer-events-none opacity-0 scale-130 transition-all duration-600"
                key={clickCount}
              />
            )}

            {showLogo ? (
              <div
                className="w-full h-full relative opacity-100 scale-100 transition-all duration-1000"
              >
                <Image
                  src="/LogoHero.png"
                  alt="Logo"
                  fill
                  className="object-contain rounded-full"
                />
                <div
                  className="absolute inset-0 rounded-full border-4 border-yellow-400/80 shadow-2xl shadow-yellow-400/50 transition-all duration-500"
                />
              </div>
            ) : (
              <div className="w-full h-full relative">
                <Image
                  src="/KadmoPFPpintura.png"
                  alt="Landing Page"
                  fill
                  className="rounded-full shadow-2xl object-cover transition-all duration-500"
                />
                <div
                  className={`absolute inset-0 rounded-full border-4 transition-all duration-500 ${clickCount === 1 ? 'border-purple-400/50 shadow-lg shadow-purple-400/25' :
                    clickCount === 2 ? 'border-purple-300/70 shadow-xl shadow-purple-300/40 animate-pulse' :
                      clickCount >= 3 ? 'border-yellow-400/80 shadow-2xl shadow-yellow-400/50' :
                        'border-purple-500/20 hover:border-purple-500/50'
                    }`}
                />
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight"
          >
            Transformo ideias em interfaces funcionais e elegantes.
          </h1>

          <p
            className="text-lg md:text-xl text-purple-300"
          >
            Design • Desenvolvimento • Experiência do Usuário
          </p>

          <div>
            <button
              className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl relative overflow-hidden hover:scale-105 active:scale-95"
              onClick={() => window.open('https://abrir.link/RKPeG', '_blank')}
            >
              <span className="relative z-10">Vamos criar algo incrível juntos</span>
              <span className="absolute inset-0 bg-purple-500/20 rounded-full scale-0 opacity-0 hover:opacity-100 transition-all duration-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}