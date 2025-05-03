"use client";
import React, { useState } from 'react';
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

  const handleImageClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 3) {
      setShowLogo(true);
      setTimeout(() => {
        setShowLogo(false);
        setClickCount(0);
      }, 5000); 
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
            whileHover="hover"
            animate={clickCount >= 3 ? "spin" : "visible"}
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          >
            {showLogo ? (
              <motion.div
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                className="w-full h-full"
              >
                <Image
                  src="/LogoHero.png"
                  alt="Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </motion.div>
            ) : (
              <Image
                src="/heroKadmo.webp"
                alt="Landing Page"
                fill
                className="rounded-full shadow-2xl object-cover border-4 border-purple-500/20 hover:border-purple-500/50 transition-all duration-500"
              />
            )}
            <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-purple-500/10 transition-all duration-500" />
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