"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <motion.div
      className="min-h-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        variants={imageVariants}
        whileHover="hover"
      >
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] select-none">
          <Image
            src="/profile-pic3.png"
            alt="Landing Page"
            fill
            className="rounded-full shadow-2xl object-cover border-4 border-purple-500/20 hover:border-purple-500/50 transition-all duration-500"
          />
        </div>
      </motion.div>

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
            className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/5573991548689?text=Olá,%20gostaria%20de%20mais%20informações.', '_blank')}
          >
            Vamos criar algo incrível juntos
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
