import heroImg from '../assets/hero.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const stats = [
    { value: '500+', label: 'Tours Completed' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '10+', label: 'Years Experience' },
    { value: '20+', label: 'Island Destinations' },
]

export default function AboutSection() {
    const imgRef = useScrollAnimation()
    const textRef = useScrollAnimation()

    return (
        <section id="about" className="py-24 bg-[#f0fafe]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image side */}
                <div ref={imgRef} className="fade-in relative">
                    <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5', maxHeight: '580px' }}>
                        <img
                            src={heroImg}
                            alt="Coralwind Expeditions local boat"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -bottom-5 -right-4 md:-right-8 bg-[#0b7fa0] text-white rounded-2xl p-6 shadow-2xl">
                        <div
                            className="text-4xl font-bold text-[#ff6b47]"
                        >
                            10+
                        </div>
                        <div className="text-sm text-white/65 mt-1 leading-snug">
                            Years Navigating<br />Coron's Waters
                        </div>
                    </div>
                </div>

                {/* Text side */}
                <div
                    ref={textRef}
                    className="fade-in"
                    style={{ transitionDelay: '150ms' }}
                >
                    <span className="eyebrow mb-6 block">About Our Company</span>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#0b7fa0] leading-tight mb-6"
                    >
                        Your Journey Starts Here in Coron
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-4">
                        Founded by local fishermen families who have navigated these waters for generations,
                        Coralwind Expeditions is a Coron-based tour operator — not a booking platform. We own
                        and operate every boat, hire every crew member, and run every trip ourselves. There
                        is no middleman between you and the sea.
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-4">
                        Our fleet of traditional outrigger bangka boats are maintained to maritime standards
                        and crewed by MTOP-licensed local guides who know every hidden cove, dive site, and
                        secret sandbar in the Calamian Islands. When you book with us, you're supporting a
                        family business rooted in Coron — not a corporate chain.
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-10">
                        We offer day tours, overnight island camps, multi-day El Nido–Coron crossings, and
                        fully private charters — all priced to include permits, meals, gear, and crew so
                        your only job is to enjoy the trip.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 mb-10">
                        {stats.map((s) => (
                            <div key={s.label} className="border-l-2 border-[#ff6b47] pl-4">
                                <div
                                    className="text-2xl font-bold text-[#0b7fa0]"
                                >
                                    {s.value}
                                </div>
                                <div className="text-sm text-gray-400 mt-0.5">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    <a
                        href="#expeditions"
                        className="inline-flex items-center gap-2 text-[#ff6b47] font-semibold hover:gap-4 transition-all duration-200"
                    >
                        Explore Our Tours
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
