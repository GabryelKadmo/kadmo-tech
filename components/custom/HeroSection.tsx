"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 1,
    delay: Math.random() * 2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-400/20"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            y: [0, -20, -40],
            x: [0, Math.random() * 20 - 10, Math.random() * 20 - 10]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
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
    }
  };

  return (
    <div className="relative min-h-full overflow-hidden">
      <AnimatedGradient />
      <ParticleBackground />

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
          >
            <Image
              src="/profile-pic3.png"
              alt="Landing Page"
              fill
              className="rounded-full shadow-2xl object-cover border-4 border-purple-500/20 hover:border-purple-500/50 transition-all duration-500"
            />
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
              onClick={() => window.open('https://wa.me/5573991548689?text=Olá,%20gostaria%20de%20mais%20informações.', '_blank')}
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