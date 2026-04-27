import type { RefObject } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const testimonials = [
    {
        text: "The crew was phenomenal — they knew every hidden corner of Coron. We saw things most tourists never get to experience. We'll definitely be back!",
        name: 'Sarah M.',
        role: 'Travel Blogger, Manila',
        rating: 5,
    },
    {
        text: 'Coralwind Expeditions made our honeymoon in Coron absolutely magical. The private sunset cruise was breathtaking — professional, friendly, and so passionate about their islands.',
        name: 'James & Ana T.',
        role: 'Honeymooners, Australia',
        rating: 5,
    },
    {
        text: "Best island hopping experience I've had in Southeast Asia. Snorkeling gear was top-notch and the guides were incredibly knowledgeable about the reef and local marine life.",
        name: 'Chen Wei',
        role: 'Dive Enthusiast, Singapore',
        rating: 5,
    },
]

function Stars({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#ff6b47]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

export default function TestimonialsSection() {
    const headerRef = useScrollAnimation()

    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div ref={headerRef} className="fade-in text-center mb-14">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Stars count={5} />
                        <span className="text-gray-400 text-sm font-medium">4.9 / 5 — Based on 800+ reviews</span>
                    </div>
                    <span className="eyebrow mb-4 block">Client Stories</span>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#0b7fa0]"
                    >
                        What Our Guests Say
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} rotation={[-1.2, 0.6, -0.9][i % 3]} delay={i * 100} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({
    text, name, role, rating, delay, rotation,
}: {
    text: string; name: string; role: string; rating: number; delay: number; rotation: number
}) {
    const ref = useScrollAnimation<HTMLDivElement>()

    return (
        <div ref={ref as RefObject<HTMLDivElement>} className="fade-in" style={{ transitionDelay: `${delay}ms` }}>
            <div
                className="card-photo bg-[#f0fafe] rounded-2xl p-8 flex flex-col gap-5"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                <Stars count={rating} />
                <p className="text-gray-600 leading-relaxed italic flex-1 text-[0.95rem]">
                    "{text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-[#0b7fa0] flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {name[0]}
                    </div>
                    <div>
                        <div className="font-semibold text-[#0b7fa0] text-sm">{name}</div>
                        <div className="text-gray-400 text-xs mt-0.5">{role}</div>
                    </div>
                </div>
            </div>
    </div>
    )}