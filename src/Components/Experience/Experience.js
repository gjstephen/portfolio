import './experience.scss'
import { experienceData } from './experience-data'

function Experience() {
  const exitJobCard = (company) => {
    document.querySelector(`.${company}`).classList.toggle('unhidden')
    document.querySelector(".job-further-info").classList.toggle('unhidden')
  }

  const flipJobInfo = (company) => {
    // document.querySelectorAll('.unhidden').forEach(job => {
    //   job.classList.remove('unhidden')
    // })

    document.querySelector(`.${company}`).classList.toggle('unhidden')
    document.querySelector(".job-further-info").classList.toggle('unhidden')
  }

  return (
    <div className="experience">
      <div className="exp-header">
        <h1>Experience</h1>
        <hr />
      </div>      

      <section className="job-further-info">
        <div className='info tile-back GA'>
          <p>Assisted with the planning and delivery content for the Front End Web Development part-time course with General Assembley. Providing individual feedback and assistance to students.</p>
          <button onClick={() => exitJobCard('GA')} className='exit-btn'>X</button>
        </div>

        <div className='info tile-back EY'>
          <h3>EY</h3>
          <p>During my time at EY I was a part of the Financial Accounting and Advisory Services (FAAS) team. I worked with private and public entity clients on various Mergers and Acquisitions (M&A), project management engagements, financial statement preparations, audit readiness projects, and other ad hoc servies. I provided value-add beyond the expectations of my projects, and was recognised with an internal Gold Award for doing so.</p>
          <button onClick={() => exitJobCard('EY')} className='exit-btn'>X</button>
        </div>

        <div className='info tile-back BDO'>
          <h3>BDO</h3>
          <p>I started at BDO in the Audit graduate program where I gained experience auditing all areas of a set of financial statements, across a wide range of industries. As a Senior Auditor my skillset grew to include managing teams of up to 5 members, creating team budgets and work allocations, and operating as the key client contact across a whole engagement. I was also a part of both the Firm Social Club Committe and the Audit Team Engagement Committee.</p>
          <button onClick={() => exitJobCard('BDO')} className='exit-btn'>X</button>
        </div>
      </section>
      
      <section className='basic-info unhidden'>
          <div onClick={() => flipJobInfo('GA')} className="tile">
            <div className='tile-front'>
              <h2 className='job-title'>Instructor Associate</h2>

              <h4 className='job-department'>Front End Web Development</h4>

              <p className='job-company'>General Assembley
                <span> • </span>
                <span className='job-time'>February 2023 - Present</span>
              </p>
            </div>
          </div>

          <div onClick={() => flipJobInfo('EY')} className="tile">
            <div className='tile-front'>
              <h2 className='job-title'>Assistant Manager</h2>
              
              <h4 className='job-department'>Financial Accounting Advisory Services (FAAS)</h4>

              <p className='job-company'>EY
                <span> • </span>
                <span className='job-time'>November 2021 - May 2022</span>
              </p>
            </div>
          </div>

          <div onClick={() => flipJobInfo('BDO')} className="tile">
            <div className='tile-front'>
              <h2 className='job-title'>Senior Auditor</h2>

              <h4 className='job-department'>Audit</h4>

              <p className='job-company'>BDO
                <span> • </span>
                <span className='job-time'>January 2018 - November 2021</span>
              </p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Experience