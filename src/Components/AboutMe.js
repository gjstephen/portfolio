import './style/aboutMe.scss'
import { images } from '../images/images'
import resume from '../resume.pdf'

function AboutMe() {
  const { whiteGitHubLogo, linkedInLogo, emailLogo, cvIcon } = images

  return (
    <div className="about-me">
      {/* <h1>George Stephen</h1> */}
      <div className='about-blurb'>
        <img className="profile" src="https://i.imgur.com/NO6YYPb.jpg" alt="" />

        <div>
          <p>Hi, I am George.</p>
          <p>I am a recent graduate of the General Assembley Software Engineering Immersive with a background in Accounting. I have a passion for critical thinking and creative problem solving that I started to develop during my career in audit. I really enjoyed my time at GA building my projects and testing my skills, and am ready and willing to take it to the next level.
          </p>
        </div>
      </div>

      <div className="about-icons">
      <section className='buttons'>
        <ul className="list site-list">
          <li>
            <a href='https://www.linkedin.com/in/georgejstephen/' target="_blank" rel="noreferrer">
              <button>
                <img className='logo' src={linkedInLogo} alt="LinkedIn Logo" />
              </button>
            </a>
          </li>

          <li>
            <a href='https://github.com/gjstephen' target="_blank" rel="noreferrer">
              <button>
                <img className='logo' src={whiteGitHubLogo} alt="gitHub Logo" />
              </button>
            </a>
          </li>

          <li>
            <a href='mailto:gjstephen1@gmail.com' target="_blank" rel="noreferrer">
              <button>
                <img className='email logo' src={emailLogo} alt="email Logo" />
              </button>
            </a>
          </li>

          <li>
            <a href={resume} download='G Stephen Resume'>
              <button>
                <img className='cv logo' src={cvIcon} alt="cv icon" />
              </button>
            </a>
          </li>
        </ul>
      </section>
      </div>
    </div>
  )
}

export default AboutMe