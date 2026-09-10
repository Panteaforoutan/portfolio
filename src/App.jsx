import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <div>
          <Navbar />
          <About />
          <Footer />
        </div>
      </section>

    </>
  )
}

export default App
