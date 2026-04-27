import { useScrollAnimation } from '../hooks/useScrollAnimation'

const pillars = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        title: 'Local Crew, Every Trip',
        body: 'Every boat is staffed by third-generation Calamianes fishermen — born on these waters, licensed by the MTOP, and fluent in the tides, currents, and hidden spots that no map can show.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Safety-First Operations',
        body: 'Each vessel carries certified life jackets, first-aid kits, VHF radio, and a PAGASA-monitored weather feed. Every departure is cleared with the Philippine Coast Guard.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Small Private Groups',
        body: 'We cap every trip at 12 guests. No overcrowded decks, no rushing — just your group, moving at your pace, with personalized attention from crew to cook.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        title: 'All-Inclusive Pricing',
        body: "Your booking covers the boat, permits, entrance fees, snorkeling gear, fresh island lunch, drinking water, and the crew's tips — there are no surprise add-ons at the dock.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
        title: 'Custom Itineraries',
        body: "Tell us your priorities — photography, diving, relaxation, or romance — and we'll build a route around them. Every itinerary is hand-crafted by our operations team before your trip.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        ),
        title: 'Transparent Booking',
        body: 'Book directly with us — no third-party markups. A small deposit holds your date and the balance is settled on the morning of departure. Free cancellation up to 48 hours before.',
    },
]

const steps = [
    {
        num: '01',
        title: 'Choose Your Expedition',
        body: 'Browse our ready-made tours or describe your ideal trip. Day tours, overnight expeditions, or multi-day routes — we have options for every schedule.',
    },
    {
        num: '02',
        title: 'We Prepare Everything',
        body: 'Our team handles permits, supplies, and route planning. You get a detailed trip brief the day before with a weather confirmation and meeting point.',
    },
    {
        num: '03',
        title: 'Sail. Explore. Rest.',
        body: "Board at dawn, glide through turquoise waters, snorkel or dive, eat fresh food at anchor, and return sun-kissed at sunset. We take care of the rest.",
    },
]

export default function WhyUsSection() {
    const headerRef = useScrollAnimation<HTMLDivElement>()
    const stepsRef = useScrollAnimation<HTMLDivElement>()

    return (
        <section id="why-us" className="py-24" style={{ background: 'linear-gradient(160deg, #001e3c 0%, #00315e 55%, #0a2e50 100%)' }}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div ref={headerRef} className="fade-in text-center mb-16">
                    <span className="eyebrow mb-4 block">Why Coralwind</span>
                    <h2
                        className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight"
                    >
                        Built by Locals. <br className="hidden sm:block" />Designed for You.
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                        We're not a travel agency — we're a Coron-based operation run by the same families
                        who have fished these seas for decades. Here's what that means for your trip.
                    </p>
                </div>

                {/* Pillar grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-24">
                    {pillars.map((p, i) => (
                        <PillarCard key={i} pillar={p} rotation={[-1.5, 0.8, -1.0, 1.2, -0.6, 1.0][i % 6]} delay={i * 80} />
                    ))}
                </div>

                {/* How it works */}
                <div ref={stepsRef} className="fade-in">
                    <div className="text-center mb-12">
                        <span className="eyebrow mb-4 block">How It Works</span>
                        <h3
                            className="text-3xl md:text-4xl font-semibold text-white"
                        >
                            From Booking to Boarding in 3 Steps
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connector line (desktop) */}
                        <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-[#ff3d00]/40 via-[#ff3d00] to-[#ff3d00]/40" />

                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className="relative flex flex-col items-center text-center px-4"
                                style={{ transitionDelay: `${i * 120}ms` }}
                            >
                                <div className="relative z-10 w-20 h-20 rounded-full bg-white/10 border-2 border-[#ff3d00] flex items-center justify-center shadow-lg mb-6">
                                    <span
                                        className="text-2xl font-bold text-[#ff3d00]"
                                    >
                                        {step.num}
                                    </span>
                                </div>
                                <h4
                                    className="text-xl font-semibold text-white mb-3"
                                >
                                    {step.title}
                                </h4>
                                <p className="text-white/60 text-sm leading-relaxed">{step.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function PillarCard({ pillar, delay, rotation }: { pillar: typeof pillars[0]; delay: number; rotation: number }) {
    const ref = useScrollAnimation<HTMLDivElement>()
    return (
        <div ref={ref} className="fade-in" style={{ transitionDelay: `${delay}ms` }}>
            <div
                className="card-photo group bg-white/8 rounded-2xl p-7 border border-white/10 hover:border-[#ff3d00]/50"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#ff3d00]/15 text-[#ff3d00] mb-5 group-hover:bg-[#ff3d00] group-hover:text-white transition-all duration-300">
                    {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{pillar.body}</p>
            </div>
        </div>
    )
}
