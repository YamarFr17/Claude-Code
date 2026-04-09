import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Engagements from './components/Engagements'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Engagements />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
