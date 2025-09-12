'use client';

import { useEffect } from 'react';

export default function FormRedirect() {
    useEffect(() => {
        // Redireciona imediatamente para o formulário
        window.location.href = 'https://forms.gle/VeVfXbfQAEU5iCcv5';
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-indigo-900 flex items-center justify-center">
            <div className="text-center p-8">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400 mx-auto mb-4"></div>
                <h1 className="text-2xl font-bold text-white mb-2 text-glow-effect">
                    Redirecionando para o formulário...
                </h1>
                <p className="text-purple-300 mb-4">
                    Se não for redirecionado automaticamente, clique no link abaixo:
                </p>
                <a
                    href="https://forms.gle/VeVfXbfQAEU5iCcv5"
                    className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                    Acessar Formulário
                </a>
            </div>
        </div>
    );
}
