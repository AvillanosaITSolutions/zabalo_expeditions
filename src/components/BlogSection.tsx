import type { RefObject } from 'react'
import heroImg from '../assets/hero.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const posts = [
    {
        date: 'May 10, 2025',
        title: 'Best Islands to Visit in Coron for First-Timers',
        excerpt:
            "Planning your first trip to Coron? We break down the must-see spots — from Kayangan Lake to the hidden coves only locals know about.",
    },
    {
        date: 'April 22, 2025',
        title: 'What to Pack for Coron Island Hopping',
        excerpt:
            "Reef-safe sunscreen, quick-dry clothes, and a waterproof bag — here's the complete packing list for a perfect day on the water.",
    },
    {
        date: 'March 15, 2025',
        title: "A Beginner's Guide to Diving the Coron Wrecks",
        excerpt:
            "The WWII Japanese fleet beneath Coron Bay is a bucket-list dive. Here's everything you need to know before you go under.",
    },
]

export default function BlogSection() {
    const headerRef = useScrollAnimation()

    return (
        <section id="blog" className="py-24 bg-[#f0fafe]">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    ref={headerRef}
                    className="fade-in flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
                >
                    <div>
                        <span className="eyebrow mb-4 block">Articles &amp; Insights</span>
                        <h2
                            className="text-4xl md:text-5xl font-bold text-[#0b7fa0]"
                        >
                            Our Latest Blog Posts
                        </h2>
                    </div>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-[#ff6b47] font-semibold shrink-0 hover:gap-4 transition-all duration-200"
                    >
                        View All Posts
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <BlogCard key={i} {...post} delay={i * 90} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function BlogCard({
    date, title, excerpt, delay,
}: {
    date: string; title: string; excerpt: string; delay: number
}) {
    const ref = useScrollAnimation()

    return (
        <a
            ref={ref as unknown as RefObject<HTMLAnchorElement>}
            href="#"
            className="fade-in group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={heroImg}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-6">
                <span className="text-[#ff6b47] text-[0.65rem] font-bold uppercase tracking-widest">
                    {date}
                </span>
                <h3
                    className="text-lg font-bold text-[#0b7fa0] mt-2 mb-3 leading-snug group-hover:text-[#ff6b47] transition-colors duration-200"
                >
                    {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{excerpt}</p>
            </div>
        </a>
    )
}
