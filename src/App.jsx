import { BrowserRouter } from 'react-router-dom'
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Footer
} from './components'

import { motion, useScroll, useSpring } from 'framer-motion'
import './index.css'

const App = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
        {/* <StarsCanvas /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
