import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologics from './components/Technologics'
import Exprience from './components/Exprience'
import Project from './components/Project'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen overflow-x-hidden text-neutral-300 selection:text-cyan-900'>
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
     <Navbar/>
     <div className='mx-auto px-8 w-10/12'>
      <Hero/>
      <About/>
      <Technologics/>
      <Exprience/>
      <Project/>
      <Contact/>
     </div>
    </div>
  )
}

export default App
