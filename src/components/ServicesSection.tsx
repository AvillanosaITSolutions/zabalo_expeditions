import type { RefObject, ReactNode } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Island Hopping Tours',
        desc: "Multi-stop day tours visiting Coron's most iconic spots: Kayangan Lake, Twin Lagoon, CYC Beach, and more.",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
            </svg>
        ),
        title: 'Snorkeling & Diving',
        desc: 'Explore vibrant coral reefs and WWII Japanese shipwrecks with guided snorkeling and certified diving excursions.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        title: 'Private Charters',
        desc: "Book an entire bangka for your group — ideal for families, wedding celebrations, or corporate team outings.",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        title: 'Sunset Cruises',
        desc: "End your day with a magical golden-hour cruise through Coron Bay as the sun dips below the karst horizon.",
    },
]

export default function ServicesSection() {
    const headerRef = useScrollAnimation()

    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div ref={headerRef} className="fade-in text-center mb-14">
                    <span className="eyebrow mb-4 block">Our Services</span>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#0b7fa0] mb-4"
                    >
                        Exclusive Charter Services
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                        From guided island hops to private sunset charters, every Zabalo experience is
                        crafted around your adventure.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((s, i) => (
                        <ServiceCard key={i} icon={s.icon} title={s.title} desc={s.desc} rotation={[-1.0, 0.7, -1.3, 0.9][i % 4]} delay={i * 90} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ServiceCard({
    icon, title, desc, delay, rotation,
}: {
    icon: ReactNode; title: string; desc: string; delay: number; rotation: number
}) {
    const ref = useScrollAnimation()

    return (
        <div ref={ref as RefObject<HTMLDivElement>} className="fade-in" style={{ transitionDelay: `${delay}ms` }}>
            <div
                className="card-photo group p-8 rounded-2xl border border-gray-100 bg-white hover:border-[#ff6b47]/30 text-center"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff6b47]/10 text-[#ff6b47] mb-5 group-hover:bg-[#ff6b47] group-hover:text-white transition-all duration-300">
                    {icon}
                </div>
                <h3
                    className="text-lg font-bold text-[#0b7fa0] mb-3"
                >
                    {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}
