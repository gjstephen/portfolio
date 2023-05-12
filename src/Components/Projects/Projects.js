import './projects.scss'
import { images } from '../../images/images'
import { projectsInformation } from './projects-data'

function Projects() {
  const { accountingImage, iChewsYouImage, recipeKeeperImage, ticTacToeImage, gitHubLogo, websiteLogo } = images

  const renderProjectList = () => {
    return projectsInformation.map((project, index) => {
      return (
        <div className="project" key={index}>
            <div className='project-wrapper'>
              <div>
                <h3>{project.title}</h3>

                <ul className="list">
                  {project.techList.map((tech, j) => {
                    return (
                      <li className='tech' key={(j)}>{tech}</li>
                    )
                  })}
                </ul>
              </div>

              <p className='project-text'>{project.blurb}</p>

              <div>
                <hr />
                <ul className="list site-list">
                  <li>
                    <a href={project.siteURL} target="_blank" rel="noreferrer">
                      <button>
                        <img className='gh-logo' src={websiteLogo} alt="gitHub Logo" />
                        <p>Live Site</p>
                      </button>
                    </a>
                  </li>

                  <li>
                    <a href={project.gitHub} target="_blank" rel="noreferrer">
                      <button>
                        <img className='gh-logo' src={gitHubLogo} alt="gitHub Logo" />
                        <p>GitHub</p>
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <aside>
              <img className='project-img' src={project.imageURL} alt="" />
            </aside>
        </div>
      )
    })
  }

  return (
    <div className="project-page" id='portfolio'>
      <h1>Projects</h1>
      <div className='project-list'>
      {renderProjectList()}
      </div>
    </div>
  )
}

export default Projects