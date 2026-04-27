const items = [
    'Island Hopping',
    'Coron Palawan',
    'Bangka Tours',
    'Kayangan Lake',
    'Twin Lagoon',
    'Wreck Diving',
    'Sunset Cruises',
    'Private Charters',
    'Malcapuya Island',
    'Barracuda Lake',
]

export default function MarqueeTicker() {
    const doubled = [...items, ...items]
    return (
        <div className="border-y border-[#0369a1]/40 py-4 overflow-hidden" style={{ background: '#001e3c' }}>
            <div className="marquee-track">
                {doubled.map((item, i) => (
                    <span
                        key={i}
                        className="flex items-center gap-4 px-6 text-[#ff3d00] text-[0.65rem] font-bold uppercase tracking-[0.2em] whitespace-nowrap"
                    >
                        {item}
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff3d00] shrink-0" />
                    </span>
                ))}
            </div>
        </div>
    )
}
