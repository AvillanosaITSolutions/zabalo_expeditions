const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Expeditions', href: '#expeditions' },
    { label: 'Services', href: '#services' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Contact Us', href: '#contact' },
]

export default function Footer() {
    return (
        <footer id="contact" className="bg-white border-t border-sky-100 text-[#0c4a6e]">
            {/* Main grid */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand column */}
                <div className="lg:col-span-2">
                    <div className="mb-5">
                        <div
                            className="font-bold text-2xl text-white"
                        >
                            Zabalo
                        </div>
                        <div className="text-[#ff6b47] text-[0.6rem] tracking-[0.22em] uppercase font-semibold mt-0.5">
                            Expeditions
                        </div>
                    </div>
                    <p className="text-slate-500 leading-relaxed mb-7 max-w-sm text-sm">
                        Authentic local bangka boat expeditions through the pristine waters of Coron, Palawan —
                        crafted by the families who have called these islands home for generations.
                    </p>
                    {/* Social icons */}
                    <div className="flex gap-3">
                        {['Facebook', 'Instagram', 'Twitter'].map((name) => (
                            <a
                                key={name}
                                href="#"
                                aria-label={name}
                                className="w-9 h-9 rounded-full border border-sky-200 flex items-center justify-center text-orange-400 hover:bg-[#ff6b47] hover:border-[#ff6b47] hover:text-white transition-all duration-200 text-xs font-bold"
                            >
                                {name[0]}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold text-[#0b7fa0] text-[0.65rem] uppercase tracking-widest mb-6">
                        Quick Links
                    </h4>
                    <ul className="space-y-3">
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-slate-500 hover:text-[#ff6b47] text-sm transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold text-[#0b7fa0] text-[0.65rem] uppercase tracking-widest mb-6">
                        Keep in Touch
                    </h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex gap-3 items-start text-slate-500">
                            <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#ff6b47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Port Area, Coron<br />Palawan, Philippines</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <svg className="w-4 h-4 shrink-0 text-[#ff6b47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href="tel:+639123456789" className="text-slate-500 hover:text-[#ff6b47] transition-colors">
                                +63 912 345 6789
                            </a>
                        </li>
                        <li className="flex gap-3 items-center">
                            <svg className="w-4 h-4 shrink-0 text-[#ff6b47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:hello@zabaloexpeditions.com" className="text-slate-500 hover:text-[#ff6b47] transition-colors">
                                hello@zabaloexpeditions.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-sky-100">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-xs">
                    <span>©2025 Zabalo Expeditions. All Rights Reserved.</span>
                    <span>Coron, Palawan, Philippines</span>
                </div>
            </div>
        </footer>
    )
}
