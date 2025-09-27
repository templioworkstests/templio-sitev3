import Header from '@components/Header'
import Hero from '@components/Hero'
import WhoWhat from '@components/WhoWhat'
import Projects from '@components/Projects'
import Manifesto from '@components/Manifesto'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import ScrollTop from '@components/ScrollTop'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoWhat />
        <Projects />
        <Manifesto />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
