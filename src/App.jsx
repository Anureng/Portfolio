import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='font-mono'>
        <Navbar className='sm:invisible' />
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
