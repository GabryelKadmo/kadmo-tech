export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": ["ProfessionalService", "Person"],
        "name": "Kadmo Tech",
        "description": "Desenvolvedor Full Stack especializado em soluções digitais personalizadas. Software eficiente, landing pages que convertem e design de alta qualidade.",
        "url": "https://www.kadmo.tech",
        "email": "contato@kadmo.tech",
        "image": "https://www.kadmo.tech/SEOkadmo-tech.jpg",
        "logo": "https://www.kadmo.tech/Kdm-Logo.png",
        "founder": {
            "@type": "Person",
            "name": "Kadmo",
            "jobTitle": "Desenvolvedor Full Stack",
            "worksFor": {
                "@type": "Organization",
                "name": "Kadmo Tech"
            }
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR"
        },
        "serviceArea": {
            "@type": "Country",
            "name": "Brasil"
        },
        "areaServed": "Worldwide",
        "knowsAbout": [
            "Desenvolvimento Full Stack",
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Design UX/UI",
            "Landing Pages",
            "Aplicações Web",
            "Consultoria Tecnológica",
            "Desenvolvimento Front-end",
            "Desenvolvimento Back-end"
        ],
        "sameAs": [
            "https://github.com/GabryelKadmo",
            "https://www.linkedin.com/in/kadmo",
            "https://api.whatsapp.com/send?phone=5521998461237"
        ],
        "offers": {
            "@type": "Offer",
            "description": "Desenvolvimento de software personalizado, landing pages otimizadas e design profissional",
            "category": "Development Services"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Desenvolvimento",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Desenvolvimento Full Stack",
                        "description": "Desenvolvimento completo de aplicações web com React, Next.js e tecnologias modernas"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Landing Pages",
                        "description": "Criação de landing pages otimizadas para conversão e performance"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Design UX/UI",
                        "description": "Design de interfaces modernas e funcionais focadas na experiência do usuário"
                    }
                }
            ]
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.kadmo.tech"
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.kadmo.tech"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Portfólio",
                    "item": "https://www.kadmo.tech/portfolio"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Contato",
                    "item": "https://www.kadmo.tech#contact"
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
