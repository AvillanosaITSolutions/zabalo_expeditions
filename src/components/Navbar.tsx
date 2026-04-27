import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'Expeditions', href: '#expeditions' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', handler, { passive: true })
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(11,127,160,0.12)] border-b border-sky-100'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
                {/* Logo */}
                <a href="#" className="flex flex-col leading-tight">
                    <span className={`font-normal text-2xl tracking-wide ${scrolled ? 'text-[#0b7fa0]' : 'text-white'}`} style={{ fontFamily: 'Pacifico, cursive' }}>
                        Zabalo
                    </span>
                    <span className={`text-[0.6rem] tracking-[0.22em] uppercase font-semibold ${scrolled ? 'text-[#e85d37]' : 'text-sky-200'}`}>
                        Expeditions
                    </span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${scrolled ? 'text-slate-600 hover:text-[#e85d37]' : 'text-white/80 hover:text-sky-200'}`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href="#book"
                    className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-bold rounded-lg transition-all duration-200 ${scrolled ? 'bg-[#ff3d00] hover:bg-[#e03600] btn-glow' : 'bg-white/20 hover:bg-white/30 backdrop-blur border border-white/30'}`}
                >
                    Book Now
                </a>

                {/* Mobile hamburger */}
                <button
                    className={`md:hidden p-2 ${scrolled ? 'text-[#0b7fa0]' : 'text-white'}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-sky-100">
                    <ul className="flex flex-col px-6 py-5 gap-5">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-slate-600 hover:text-[#e85d37] text-sm font-medium transition-colors"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#book"
                                className="inline-flex px-5 py-2.5 bg-[#ff6b47] text-white text-sm font-semibold rounded"
                                onClick={() => setMenuOpen(false)}
                            >
                                Book Now
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
