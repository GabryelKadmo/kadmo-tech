"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="circuitPattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M 0 20 Q 10 10 20 20 T 40 20"
              stroke="url(#circuitGradient)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathOffset: 1 }}
              animate={{ pathOffset: 0 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.path
              d="M 20 0 Q 10 10 20 20 T 20 40"
              stroke="url(#circuitGradient)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathOffset: 1 }}
              animate={{ pathOffset: 0 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                delay: 5
              }}
            />
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
      </svg>
    </div>
  );
};

const AnimatedGradient = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{
        background: "linear-gradient(135deg, #111827, #4c1d95, #111827)"
      }}
      animate={{
        background: [
          "linear-gradient(135deg, #111827, #4c1d95, #111827)",
          "linear-gradient(135deg, #111827, #6d28d9, #111827)",
          "linear-gradient(135deg, #111827, #4c1d95, #111827)"
        ]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  );
};

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    spin: {
      rotate: 360,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    },
    clicked: {
      scale: [1, 0.95, 1.1, 1],
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    continuousSpin: {
      rotate: 360,
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity
      }
    },
    shake: {
      x: [-10, 10, -10, 10, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "backOut"
      }
    }
  };

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
    <div id='hero' className="relative min-h-full overflow-hidden">
      <AnimatedGradient />
      <CircuitBackground />
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      <div className="absolute inset-0 z-0 bg-radial-gradient from-purple-500/60 to-transparent opacity-70" />

      <motion.div
        className="relative z-10 min-h-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-24 py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] select-none"
            variants={imageVariants}
            whileHover={!isSpinning && !showLogo ? "hover" : undefined}
            animate={
              shouldShake ? "shake" :
                isSpinning ? "continuousSpin" :
                  clickCount >= 3 ? "spin" :
                    "visible"
            }
            whileTap={!isSpinning && !showLogo ? "clicked" : undefined}
            onClick={handleImageClick}
            style={{
              cursor: isSpinning || showLogo ? 'default' : 'pointer'
            }}
          >
            {showSpamWarning && !isSpinning && !showLogo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-30"
              >
                <div className="bg-red-500/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                  <span className="text-white text-sm font-medium">
                    {spamMessages[spamMessageIndex]}
                  </span>
                </div>
              </motion.div>
            )}

            {clickCount > 0 && clickCount < 3 && !showLogo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20"
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
              </motion.div>
            )}

            {clickCount > 0 && clickCount < 3 && (
              <motion.div
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border-4 border-purple-400 pointer-events-none"
                key={clickCount}
              />
            )}

            {showLogo ? (
              <motion.div
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                className="w-full h-full relative"
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
              </motion.div>
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
          </motion.div>
        </div>

        <motion.div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight"
            variants={itemVariants}
          >
            Transformo ideias em interfaces funcionais e elegantes.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-purple-300"
            variants={itemVariants}
          >
            Design • Desenvolvimento • Experiência do Usuário
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.button
              className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://abrir.link/RKPeG', '_blank')}
            >
              <span className="relative z-10">Vamos criar algo incrível juntos</span>
              <span className="absolute inset-0 bg-purple-500/20 rounded-full scale-0 hover:scale-100 opacity-0 hover:opacity-100 transition-all duration-500" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}