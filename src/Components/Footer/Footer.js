import './footer.scss'
import { images } from '../../images/images'
import resume from '../../resume.pdf'

function Footer() {
  const { whiteGitHubLogo, linkedInLogo, emailLogo, cvIcon } = images

  return (
    <div className="footer">
      <div>
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
                <img className='email logo' src={emailLogo} alt="email icon" />
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

      <p>&#169; George Stephen</p>
      </div>
    </div>
  )
}

export default Footer