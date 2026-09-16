import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductsSection from './components/ProductsSection'
import HowToOrderSection from './components/HowToOrderSection'

function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProductsSection />
        <HowToOrderSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
