import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Skills from './components/Skills'
import './index.css'
function App() {
  return (
    <div className='bg-gray-700 min-h-screen'>
      <Navbar/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
