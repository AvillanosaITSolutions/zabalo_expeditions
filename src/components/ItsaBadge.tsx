import appLogo from '../assets/app_logo.png'

export default function ItsaBadge() {
    return (
        <a
            href="https://itsavillanosa.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit ItsAvillanosa"
            className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/95 px-3 py-2 text-xs font-semibold text-[#001e3c] shadow-[0_10px_30px_rgba(0,30,60,0.22)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_34px_rgba(0,30,60,0.28)]"
        >
            <img src={appLogo} alt="ItsAvillanosa" className="h-5 w-5 rounded-full object-cover" />
            <span>ItsAvillanosa</span>
        </a>
    )
}
