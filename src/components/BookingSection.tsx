import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function BookingSection() {
    const leftRef = useScrollAnimation<HTMLDivElement>()
    const rightRef = useScrollAnimation<HTMLDivElement>()

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        tourType: '',
        date: '',
        groupSize: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section id="booking" className="py-20 bg-white border-t border-sky-100">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                    {/* Left — info panel */}
                    <div ref={leftRef} className="fade-in">
                        <span className="eyebrow mb-4 block">Book Your Trip</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#001e3c] leading-tight mb-6">
                            Ready to Set Sail?<br />
                            <em className="not-italic text-[#ff3d00]">Let's Make It Happen.</em>
                        </h2>
                        <p className="text-gray-500 text-base leading-relaxed mb-10">
                            Fill out the form and our team will get back to you within a few hours with a
                            personalised itinerary, pricing, and availability. No commitment needed.
                        </p>

                        {/* Reassurance list */}
                        <ul className="space-y-5">
                            {[
                                { icon: '✓', title: 'Free, no-obligation quote', body: "We'll send you a full breakdown before you commit to anything." },
                                { icon: '✓', title: 'Fast response', body: 'We typically reply within 2–4 hours during daylight hours.' },
                                { icon: '✓', title: 'Flexible & customisable', body: "Tell us what you want — we build the tour around you, not the other way." },
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-[#ff3d00] text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#001e3c] text-sm">{item.title}</div>
                                        <div className="text-gray-400 text-sm mt-0.5">{item.body}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Contact quick-links */}
                        <div className="mt-10 pt-8 border-t border-sky-100 flex flex-wrap gap-5">
                            <a href="tel:+639123456789" className="flex items-center gap-2 text-sm font-semibold text-[#0369a1] hover:text-[#ff3d00] transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +63 912 345 6789
                            </a>
                            <a href="https://wa.me/639123456789" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:opacity-80 transition-opacity">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp Us
                            </a>
                            <a href="mailto:hello@coralwindexpeditions.com" className="flex items-center gap-2 text-sm font-semibold text-[#0369a1] hover:text-[#ff3d00] transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                hello@coralwindexpeditions.com
                            </a>
                        </div>
                    </div>

                    {/* Right — booking form */}
                    <div ref={rightRef} className="fade-in" style={{ transitionDelay: '120ms' }}>
                        <div className="bg-[#f0f9ff] rounded-3xl p-8 md:p-10 shadow-xl border border-sky-100">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                                    <div className="w-16 h-16 rounded-full bg-[#ff3d00] flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#001e3c]">Inquiry Sent!</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                        Thank you! We'll review your trip details and get back to you within a few hours.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-2 text-sm font-semibold text-[#ff3d00] hover:underline"
                                    >
                                        Send another inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <p className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest mb-6">
                                            Trip Inquiry Form
                                        </p>
                                    </div>

                                    {/* Name + Phone */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Juan dela Cruz"
                                                className="border border-sky-200 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff3d00]/30 focus:border-[#ff3d00] transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest">Phone / WhatsApp</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+63 9XX XXX XXXX"
                                                className="border border-sky-200 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff3d00]/30 focus:border-[#ff3d00] transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="border border-sky-200 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff3d00]/30 focus:border-[#ff3d00] transition-all"
                                        />
                                    </div>

                                    {/* Tour Type + Date */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest">Tour Type *</label>
                                            <select
                                                name="tourType"
                                                required
                                                value={form.tourType}
                                                onChange={handleChange}
                                                className="border border-sky-200 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff3d00]/30 focus:border-[#ff3d00] transition-all"
                                            >
                                                <option value="">Select a tour</option>
                                                <option>Island Hopping Tour A</option>
                                                <option>Kayangan Lake & Twin Lagoon</option>
                                                <option>Wreck Diving Expedition</option>
                                                <option>Sunset Island Cruise</option>
                                                <option>Malcapuya Private Island</option>
                                                <option>El Nido – Coron Crossing</option>
                                                <option>Private Charter</option>
                                                <option>Custom / Not Sure Yet</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest">Travel Date</label>
                                            <input
                                                type="date"
                                                name="date"
                                                value={form.date}
                                                onChange={handleChange}
                                                className="border border-sky-200 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff3d00]/30 focus:border-[#ff3d00] transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Group Size */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest">Group Size</label>
                                        <select
                                            name="groupSize"
                                            value={form.groupSize}
                                            onChange={handleChange}
                                            className="border border-sky-200 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff3d00]/30 focus:border-[#ff3d00] transition-all"
                                        >
                                            <option value="">Select group size</option>
                                            <option>1–2 pax</option>
                                            <option>3–5 pax</option>
                                            <option>6–10 pax</option>
                                            <option>11–15 pax</option>
                                            <option>Private group (16+)</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest">Special Requests / Notes</label>
                                        <textarea
                                            name="message"
                                            rows={3}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Dietary needs, dive certifications, custom stops, honeymoon details..."
                                            className="border border-sky-200 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff3d00]/30 focus:border-[#ff3d00] transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-[#ff3d00] text-white font-bold rounded-xl btn-glow hover:bg-[#e03600] transition-colors duration-200 text-base mt-2"
                                    >
                                        Send My Inquiry →
                                    </button>

                                    <p className="text-center text-[0.65rem] text-gray-400 mt-2">
                                        No payment required. We'll confirm availability &amp; send your quote first.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
