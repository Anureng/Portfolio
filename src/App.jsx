import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar className='sm:invisible' />
      <Header />

    </>
  )
}

export default App
