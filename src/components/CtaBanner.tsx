import heroImg from '../assets/hero.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function CtaBanner() {
    const ref = useScrollAnimation()

    return (
        <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0">
                <img src={heroImg} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#001e3c]/95 via-[#ff3d00]/70 to-[#0369a1]/85" />
            </div>

            <div ref={ref} className="fade-in relative max-w-3xl mx-auto px-6 text-center">
                <span className="eyebrow mb-6 block" style={{ color: '#ff6b47' }}>
                    Special Offers &amp; Deals
                </span>
                <h2
                    className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
                >
                    Enjoy Island Magic at Special Rates
                </h2>
                <p className="text-white/68 text-lg mb-10 leading-relaxed">
                    Book any tour this season and receive complimentary snorkeling gear, a packed island
                    lunch, and a free sunset photography package.
                </p>
                <a
                    href="#book"
                    className="inline-flex items-center gap-2 px-10 py-4 bg-[#ff3d00] text-white font-bold text-base rounded-lg btn-glow hover:bg-[#e03600] transition-colors duration-200"
                >
                    Get a Free Quote
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </section>
    )
}
