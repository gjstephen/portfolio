import './App.css';
import { Routes, Route } from 'react-router-dom'

import NavBar from  './Components/Header/NavBar'
import Header from './Components/Header/Header'
import AboutMe from './Components/AboutMe'
import Experience from './Components/Experience/Experience'
import Education from './Components/Education/Education'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume'
import Footer from './Components/Footer/Footer'

import './style.scss'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <Header />
      </header>

      <main>
        <AboutMe />
        <Projects />
        <hr className='section-break'/>
        <Experience />
        <hr className='section-break'/>
        <Education />
        <Footer />

        {/* <Routes>
          <Route path="/portfolio" element={<AboutMe />}/>
          <Route path="/portfolio/experience" element={<Experience />}/>
          <Route path="/portfolio/education" element={<Education />}/>
          <Route path="/portfolio/projects" element={<Projects />}/>
          <Route path="/portfolio/resume" element={<Resume />}/>
          <Route path="/portfolio/contact-me" element={<Footer />}/>
        </Routes> */}
        
      </main>
    </div>
  );
}

export default App;
