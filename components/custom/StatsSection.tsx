"use client";

export function StatsSection() {
    const stats = [
        { value: '25+', label: 'Projetos concluídos' },
        { value: '100%', label: 'Satisfação dos clientes' },
        { value: '5x', label: 'Melhoria na experiência do usuário' },
        { value: '∞', label: 'Xícaras de café' }
    ];

    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                    >
                        <p className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                            {stat.value}
                        </p>
                        <p className="mt-2 text-gray-300">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}