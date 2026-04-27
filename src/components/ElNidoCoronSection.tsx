import heroImg from '../assets/hero.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const journeyStops = [
    {
        day: 'Day 1',
        title: 'El Nido Departure',
        text: 'Start from El Nido and cruise through Bacuit Bay, hidden beaches, and dramatic limestone cliffs.',
    },
    {
        day: 'Day 2',
        title: 'Remote Island Camps',
        text: 'Sleep in island camps, snorkel untouched reefs, and enjoy fresh local meals by the sea.',
    },
    {
        day: 'Day 3',
        title: 'Coron Arrival',
        text: 'Arrive in Coron with stops at crystal lagoons and reef gardens along the route.',
    },
]

const highlights = [
    '3D2N or 4D3N expedition options',
    'Local crew, guide, and island chef included',
    'Snorkeling gear and safety equipment provided',
    'Small groups for a premium, relaxed experience',
]

export default function ElNidoCoronSection() {
    const headerRef = useScrollAnimation<HTMLDivElement>()
    const timelineRef = useScrollAnimation<HTMLDivElement>()

    return (
        <section
            id="el-nido-coron"
            className="relative overflow-hidden py-24 md:py-28"
            style={{
                background:
                    'linear-gradient(145deg, #e0f7fa 0%, #bae6fd 35%, #7dd3fc 70%, #38bdf8 100%)',
            }}
        >
            <div
                className="pointer-events-none absolute -top-20 -left-10 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl"
                style={{ animation: 'floatY 8s ease-in-out infinite' }}
            />
            <div
                className="pointer-events-none absolute -bottom-16 right-10 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl"
                style={{ animation: 'floatY 10s ease-in-out infinite reverse' }}
            />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:items-center">
                <div ref={headerRef} className="fade-in text-[#0c4a6e]">
                    <span className="inline-flex items-center rounded-full border border-sky-300 bg-white/70 px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-sky-700 backdrop-blur">
                        Signature Multi-Day Route
                    </span>
                    <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#0c4a6e] md:text-5xl">
                        El Nido to Coron
                        <br />
                        Expedition Journey
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                        Experience Palawan's most iconic sea crossing on a curated local-boat adventure. From
                        El Nido's limestone giants to Coron's hidden lagoons, this route is built for travelers
                        who want scenery, culture, and ocean freedom in one epic expedition.
                    </p>

                    <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {highlights.map((item) => (
                            <div key={item} className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm backdrop-blur">
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#book"
                            className="rounded-lg bg-[#0b7fa0] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e85d37]"
                        >
                            Reserve This Expedition
                        </a>
                        <a
                            href="#contact"
                            className="rounded-lg border border-sky-300 px-6 py-3 text-sm font-semibold text-[#0c4a6e] bg-white/60 transition hover:bg-white/90"
                        >
                            Ask for Itinerary
                        </a>
                    </div>
                </div>

                <div ref={timelineRef} className="fade-in">
                    <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-white/80 p-6 shadow-xl backdrop-blur-xl md:p-8">
                        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/40 to-transparent" />

                        <div className="relative">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-white md:text-xl">Route Snapshot</h3>
                                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                                    El Nido → Coron
                                </span>
                            </div>

                            <div className="relative mb-8 overflow-hidden rounded-2xl border border-white/20">
                                <img src={heroImg} alt="El Nido to Coron expedition" className="h-52 w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0b7fa0]/40 via-transparent to-[#ff6b47]/35" />
                                <div className="absolute bottom-3 left-3 rounded-md bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                                    Open-sea island expedition route
                                </div>
                            </div>

                            <div className="relative space-y-4">
                                <div className="absolute left-[15px] top-2 h-[88%] w-[2px] bg-gradient-to-b from-orange-400 via-sky-200 to-transparent" />
                                {journeyStops.map((stop, index) => (
                                    <div
                                        key={stop.day}
                                        className="group relative ml-0 rounded-xl border border-sky-100 bg-white/90 p-4 pl-10 text-[#0c4a6e] transition hover:-translate-y-0.5 hover:bg-white"
                                        style={{ animationDelay: `${index * 120}ms` }}
                                    >
                                        <span
                                            className="absolute left-[10px] top-5 h-3 w-3 rounded-full bg-orange-400 ring-4 ring-sky-100"
                                            style={{ animation: 'pulseGlow 2.4s ease-in-out infinite' }}
                                        />
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/80">{stop.day}</p>
                                        <h4 className="mt-1 text-base font-semibold">{stop.title}</h4>
                                        <p className="mt-1 text-sm leading-relaxed text-white/85">{stop.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
