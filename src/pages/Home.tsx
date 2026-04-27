import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MarqueeTicker from '../components/MarqueeTicker'
import ExpeditionsSection from '../components/ExpeditionsSection'
import AboutSection from '../components/AboutSection'
import WhyUsSection from '../components/WhyUsSection'
import ElNidoCoronSection from '../components/ElNidoCoronSection'
import ServicesSection from '../components/ServicesSection'
import CtaBanner from '../components/CtaBanner'
import DestinationsSection from '../components/DestinationsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <MarqueeTicker />
            <ExpeditionsSection />
            <AboutSection />
            <WhyUsSection />
            <ElNidoCoronSection />
            <ServicesSection />
            <CtaBanner />
            <DestinationsSection />
            <TestimonialsSection />
            <Footer />
        </main>
    )
}
