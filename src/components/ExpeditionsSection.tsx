import type { RefObject } from 'react'
import heroImg from '../assets/hero.jpg'
import wreckDivingImg from '../assets/wreck_diving.jpg'
import twinLagoon from '../assets/kayangan_lake_and_twin_lagoon.jpg'
import sunsetIsland from '../assets/sunset_island.jpg'
import malcapuya from '../assets/malcapuya.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const expeditions = [
    {
        img: heroImg,
        title: 'Island Hopping Tour A',
        price: '₱2,500',
        unit: 'per person',
        duration: '8 hours',
        guests: 'Up to 12',
        boat: 'Bangka',
        desc: 'Visit Kayangan Lake, Twin Lagoon, Skeleton Wreck, and CYC Beach on one unforgettable full-day tour.',
    },
    {
        img: twinLagoon,
        title: 'Kayangan Lake & Twin Lagoon',
        price: '₱2,800',
        unit: 'per person',
        duration: '8 hours',
        guests: 'Up to 15',
        boat: 'Bangka',
        desc: 'Swim through the crystal-clear waters of Kayangan Lake — rated the cleanest lake in Asia.',
    },
    {
        img: wreckDivingImg,
        title: 'Wreck Diving Expedition',
        price: '₱3,500',
        unit: 'per person',
        duration: '8 hours',
        guests: 'Up to 8',
        boat: 'Dive Boat',
        desc: 'Explore iconic WWII Japanese shipwrecks beneath the Coron Bay — a world-class dive destination.',
    },
    {
        img: sunsetIsland,
        title: 'Sunset Island Cruise',
        price: '₱1,800',
        unit: 'per person',
        duration: '4 hours',
        guests: 'Up to 12',
        boat: 'Bangka',
        desc: "Watch golden-hour light paint the sky over Coron's limestone karsts from the open water.",
    },
    {
        img: malcapuya,
        title: 'Malcapuya Private Island',
        price: '₱3,200',
        unit: 'per person',
        duration: '10 hours',
        guests: 'Up to 10',
        boat: 'Bangka',
        desc: 'A full-day escape to pristine white-sand Malcapuya Island with snorkeling and packed lunch.',
    },
]

export default function ExpeditionsSection() {
    const headerRef = useScrollAnimation()

    return (
        <section id="expeditions" className="pt-16 pb-24" style={{ background: 'linear-gradient(160deg, #001e3c 0%, #0a2e50 60%, #00315e 100%)' }}>
            <div className="max-w-7xl mx-auto px-6">
                <div ref={headerRef} className="fade-in text-center mb-14">
                    <span className="eyebrow mb-4 block">Our Expeditions</span>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Explore Premier Island Tours
                    </h2>
                    <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
                        Whether you're chasing a hidden lagoon, a thrill dive, or a private island escape — our
                        bangkas are ready to take you there.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expeditions.map((exp, i) => (
                        <ExpeditionCard key={i} {...exp} rotation={[-1.5, 0.8, -1.2, 1.0, -0.7][i % 5]} delay={i * 80} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#ff3d00] text-white font-bold rounded-lg hover:bg-[#e03600] transition-all duration-200 btn-glow"
                    >
                        View All Tours
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

function ExpeditionCard({
    img, title, price, unit, duration, guests, boat, desc, delay, rotation,
}: {
    img: string; title: string; price: string; unit: string; duration: string
    guests: string; boat: string; desc: string; delay: number; rotation: number
}) {
    const ref = useScrollAnimation()

    return (
        <div ref={ref as RefObject<HTMLDivElement>} className="fade-in" style={{ transitionDelay: `${delay}ms` }}>
            <div
                className="card-photo group relative rounded-2xl overflow-hidden shadow-lg"
                style={{ transform: `rotate(${rotation}deg)`, height: '420px' }}
            >
                {/* Full-bleed photo */}
                <img
                    src={img}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Price badge — top left */}
                <div className="absolute top-4 left-4 bg-[#ff6b47]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-bold">
                    {price}{' '}
                    <span className="font-normal text-white/70 text-xs">{unit}</span>
                </div>

                {/* Meta pills — top right */}
                <div className="absolute top-4 right-4 flex flex-col gap-1.5 items-end">
                    <span className="bg-black/40 backdrop-blur-sm text-white/90 text-[0.65rem] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {duration}
                    </span>
                    <span className="bg-black/40 backdrop-blur-sm text-white/90 text-[0.65rem] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {guests}
                    </span>
                </div>

                {/* Content — pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[0.6rem] font-bold text-white/50 uppercase tracking-widest mb-1">{boat}</div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-snug">{title}</h3>
                    <p className="text-white/75 text-sm leading-relaxed mb-4 line-clamp-2">{desc}</p>
                    <a
                        href="#book"
                        className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-[#ff6b47] backdrop-blur-sm text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-200 hover:gap-3"
                    >
                        Book Now
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}