import './navBar.scss'
import hamburger from '../../images/hamburger.svg'
import { NavLink, Link, Navigate } from 'react-router-dom'
// import homeIcon from '../icons/home-icon.png'
import homeIcon from '../../icons/home-icon.svg'
import experienceIcon from '../../icons/experience-icon.svg'
import resume from '../../resume.pdf'

function NavBar() {
  const activeMenu = () => {
    document.querySelector('.drop-list').classList.toggle('drop-active')
    document.querySelector('.drop-list').classList.toggle('drop-inactive')
  } 

  return (
    <nav className="nav-bar">
      <section className='mobile-nav'>
        <h2><Link className='home-btn' to='/portfolio/'>Home</Link></h2>

        <button onClick={activeMenu} className='menu-btn'>
          <svg width="24" height="17" viewBox="0 0 24 17" aria-label="" class="svg-replaced" shape-rendering="geometricPrecision">
            <path d="M0 0h24v3H0zm0 7h24v3H0zm0 7h24v3H0z" fill-rule="evenodd"></path>
          </svg>
          
          <h2>Menu</h2>
        </button>

        <div className="drop-list drop-inactive">
            <li>
              <a className='portfolio-link' href="#portfolio">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <hr />
            <a target='_blank' href="https://www.linkedin.com/in/georgejstephen/">LinkedIn</a>
            <a target='_blank' href="https://github.com/gjstephen">GitHub</a>
            <a href={resume} download='G Stephen Resume'>Resume</a>
          </div>
      </section>

      <ul className="nav-list"  >
        {/* <li>
          <NavLink 
            className='nav-link'
            to='/portfolio/'
          >
            Home
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink 
            className='nav-link' 
            to='/portfolio/experience'
          >
            Work Experience
          </NavLink>
        </li>
        <li>
          <NavLink 
            className='nav-link' 
            to='/portfolio/education'
          >
            Education
          </NavLink>
        </li> */}
        <li>
          <a className='portfolio-link' href="#header">Home</a>
        </li>
        <li>
          <a className='portfolio-link' href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        {/* <li>
          <NavLink 
            className='nav-link' 
            to='/portfolio/resume'
          >
            Resume
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink 
            className='nav-link' 
            to='/portfolio/contact-me'
          >
            Contact Me
          </NavLink>
        </li> */}
      </ul>
{/* 
      <section className="bottom-nav">
        <ul>
          <li>
            <NavLink 
              className='nav-link'
              to='/portfolio/'
            >
              <img src={homeIcon} alt="home-icon" className="nav-icon" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              className='nav-link' 
              to='/portfolio/experience'
            >
              <img src={experienceIcon} alt="home-icon" className="nav-icon exp-icon" />
              <span>Experience</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              className='nav-link' 
              to='/portfolio/education'
            >
            <img src={homeIcon} alt="home-icon" className="nav-icon" />
              <span>Education</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              className='nav-link' 
              to='/portfolio/projects'
            >
              <img src={homeIcon} alt="home-icon" className="nav-icon" />
              <span>Projects</span>
            </NavLink>
          </li>
        </ul>
      </section> */}
    </nav>
  )
}


export default NavBar