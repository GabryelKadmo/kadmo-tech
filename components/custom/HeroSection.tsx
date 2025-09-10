"use client";
import React from 'react';
import LightRays from '../LightRays';
import DecryptedText from '../DecryptedText';

export default function LandingPage() {
  return (
    <div id='hero' className="relative min-h-full py-20">
      {/* LightRays Background */}
      <div className="absolute inset-0 w-full h-full">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.6}
          rayLength={0.8}
          followMouse={false}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          fadeDistance={0.7}
          className="custom-rays"
        />
      </div>

      {/* Elementos decorativos sutis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gray-200/5 blur-[100px]" />
      </div>

      <div
        className="relative z-20 min-h-full flex flex-col items-center justify-center gap-10 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full flex flex-col items-center text-center space-y-8">
          <h1
            className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight max-w-5xl cursor-pointer"
            style={{
              lineHeight: '1.1',
            }}
          >
            <DecryptedText
              text="Transformo ideias em interfaces funcionais e elegantes."
              speed={40}
              maxIterations={35}
              sequential={true}
              revealDirection="start"
              animateOn="view"
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*"
              className="text-white"
              encryptedClassName="text-white/30"
              parentClassName="whitespace-normal"
            />
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            <DecryptedText
              text="Design • Desenvolvimento • Experiência do Usuário"
              speed={60}
              maxIterations={25}
              sequential={true}
              revealDirection="start"
              animateOn="view"
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789•●○◦"
              className="text-gray-300"
              encryptedClassName="text-gray-300/30"
            />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              className="px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 active:scale-95 hover:bg-gray-100"
              onClick={() => window.open('https://abrir.link/RKPeG', '_blank')}
            >
              <span className="relative z-10">Vamos criar algo incrível juntos</span>
            </button>

            <button
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full transition-all duration-300 cursor-pointer hover:bg-white hover:text-black hover:scale-105 active:scale-95"
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              Ver Portfólio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}