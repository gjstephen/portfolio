import './education.scss'
import { educationInformation } from './education-data'

function Education() {
  const renderEducation = () => {
    return educationInformation.map((instance, index) => {
      return (
        <section className="tile-ed" key={index}>
          <div className='tile-front'>
            <h2>{instance.course}</h2>
            <h4>{instance.school}</h4>
            <p>{instance.date}</p>
          </div>

          {/* <div className='date-left'>
            <h3>{instance.course}</h3>
            <p>{instance.date}</p>
          </div>
  
          <div className='info info-right'>
            <h3>{instance.school}</h3>
            <p>{instance.detail}</p>
          </div> */}
        </section>
      )
    })
  }

  return (
    <div className="education" id='education'>
      <div className="exp-header">
        <h1 className='edu-title'>Education</h1>
        <hr />
      </div>  

      <div className="edu-list">
        {renderEducation()}
      </div>
    </div>
  )
}

export default Education