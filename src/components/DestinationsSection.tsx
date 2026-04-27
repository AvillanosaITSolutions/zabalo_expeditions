import type { RefObject } from 'react'
import heroImg from '../assets/hero.jpg'
import kayangan from '../assets/kayangan.webp'
import twinLagoon from '../assets/kayangan_lake_and_twin_lagoon.jpg'
import malcapuya from '../assets/malcapuya.jpg'
import barracuda from '../assets/barracuda.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const destinations = [
    {
        img: kayangan,
        name: 'Kayangan Lake',
        location: 'Coron Island, Palawan',
        desc: 'Rated the cleanest lake in Asia, cradled by towering limestone cliffs and turquoise water.',
    },
    {
        img: twinLagoon,
        name: 'Twin Lagoon',
        location: 'Coron Island, Palawan',
        desc: 'Two connected lagoons of contrasting temperatures, accessible by kayak or swimming under a rock wall.',
    },
    {
        img: barracuda,
        name: 'Barracuda Lake',
        location: 'Coron Island, Palawan',
        desc: 'A unique thermocline dive site with dramatic temperature layers — a must for experienced divers.',
    },
    {
        img: malcapuya,
        name: 'Malcapuya Island',
        location: 'Off Coron, Palawan',
        desc: 'Pristine white-sand shores and crystal-clear turquoise waters — a perfect paradise day escape.',
    },
]

export default function DestinationsSection() {
    const headerRef = useScrollAnimation()

    return (
        <section id="destinations" className="py-24 bg-[#f0fafe]">
            <div className="max-w-7xl mx-auto px-6">
                <div ref={headerRef} className="fade-in text-center mb-14">
                    <span className="eyebrow mb-4 block">Top Destinations</span>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#0b7fa0] mb-4"
                    >
                        Perfect Ports for Every Journey
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                        Coron is home to some of the world's most stunning natural wonders — and Coralwind
                        will take you there.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations.map((dest, i) => (
                        <DestinationCard key={i} {...dest} rotation={[-1.2, 1.5, -0.8, 1.0][i % 4]} delay={i * 90} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function DestinationCard({
    img, name, location, desc, delay, rotation,
}: {
    img: string; name: string; location: string; desc: string; delay: number; rotation: number
}) {
    const ref = useScrollAnimation<HTMLDivElement>()

    return (
        <div ref={ref as RefObject<HTMLDivElement>} className="fade-in" style={{ transitionDelay: `${delay}ms` }}>
            <div
                className="card-photo group rounded-2xl overflow-hidden shadow-md cursor-pointer"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                <div className="relative h-56 overflow-hidden">
                    <img
                        src={img}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3
                            className="text-lg font-bold text-white"
                        >
                            {name}
                        </h3>
                        <p className="text-white/65 text-xs mt-0.5">{location}</p>
                    </div>
                </div>
                <div className="p-5 bg-white">
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    <span className="inline-flex items-center gap-1 text-[#ff6b47] text-sm font-semibold mt-4">
                        Explore
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}
