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

  const renderFrontCard = () => {
    return experienceData.map((job, index) => {
      return (
        <div onClick={() => flipJobInfo(`${job.initial}`)} className="tile" key={index}>
          <div className={`tile-front ${job.initial}`}>
            <h2 className='job-title'>{job.title}</h2>
  
            <h4 className='job-department'>{job.department}</h4>
  
            <p className='job-company'>{job.company}
              <span> • </span>
              <span className='job-time'>{job.time}</span>
            </p>
          </div>
      </div>
      )
    })
  }

  const renderBackCard = () => {
    return experienceData.map((job, index) => {
      return (
        <div className={`info tile-back ${job.initial}`} key={index}>
          <h3>{job.title}, <span>{job.department}</span></h3>
          
          <h4 className='job-company'>{job.company}
            <span> • </span>
            <span className='job-time'>{job.time}</span>
          </h4>

          <ul>
            {job.furtherInfo.map((dotPoint, i) => {
              return (
                <li key={i}>{dotPoint}</li>
              )
            })}
          </ul>
        
          <button onClick={() => exitJobCard(`${job.initial}`)} className='exit-btn'>X</button>
        </div>
      )
    })
  }

  return (
    <div className="experience" id='experience'>
      <div className="exp-header">
        <h1>Experience</h1>
        <hr />
      </div>      

      <section className="job-further-info">
        {renderBackCard()}
        {/* <div className='info tile-back GA'>
          <h3>Instructor Associate, <span>Front End Web Development</span></h3>
          
          <h4 className='job-company'>General Assembley
            <span> • </span>
            <span className='job-time'>February 2023 - Present</span>
          </h4>

          <ul>
            <li>Assisted with the planning and delivery content for the Front End Web Development part-time course with General Assembley.</li>
            <li>Providing individual feedback and assistance to students.</li>
          </ul>
        
          <button onClick={() => exitJobCard('GA')} className='exit-btn'>X</button>
        </div> */}

        {/* <div className='info tile-back EY'>
          <h3>Assistant Manager, <span>Financial Accounting Advisory Services (FAAS)</span></h3>
          
          <h4 className='job-company'>EY
            <span> • </span>
            <span className='job-time'>November 2021 - May 2022</span>
          </h4>

          <ul>
            <li>As a member of the FAAS team, my role is to provide support to CFOs, their finance team and other stakeholders through a wide range of accounting, reporting, compliance, corporate governance and other ad hoc services.</li>

            <li>In my experience working on a recent Mergers & Acquisition engagement, I wrote the accounting paper for the $5b acquisition of a listed entity.  In my role, I analysed and evaluated the key issues for the appropriate accounting treatment of the acquisition. I also calculated and prepared the effective journals and the first consolidated balance sheet to record the transaction.</li>

            <li>Working on an Asset Acquisiton project, I developed the accounting paper for the $400m acquisition of a listed entity. I provided value-add to the client with the identification and evaluation of a complex accounting issue that had ramifications on the valuation, the deemed acquisition date and future tax implications.</li>

            <li>While managing a small team, I assisted in the preparation of the first consolidated financial statements for a large private company post consolidation into a new group. I was recognised internally for my work as part of the team on this project with a Gold Award for the high standard of work delivered to a tight deadline.</li>

            <li>As a project lead, I provided project management services to a large international privately-owned healthcare provider during their process improvement overhaul. This included meeting weekly with ten divisional leads to discuss project progress, while helping to identify roadblocks and resource allocation requirements to ensure the project owners were on the right path. In this role, I provided regular status updates to the Group Financial Controller, Deputy CFO and CFO; factoring in their different reporting requirements.</li>

            <li>While working on a recurring client, due to my subject matter expertise, I was selected to assist with audit readiness preparation and request fulfilment, including navigating their accounting and other systems to source and process their auditors’ required information.</li>

            <li>Awarded a 'Gold Award' for performance excellence</li>
          </ul>

          <button onClick={() => exitJobCard('EY')} className='exit-btn'>X</button>
        </div>

        <div className='info tile-back BDO'>
          <h3>Senior Auditor, <span>Audit</span></h3>
          
          <h4 className='job-company'>BDO
            <span> • </span>
            <span className='job-time'>January 2018 - November 2021</span>
          </h4>

          <ul>
            <li>Throughout my role at BDO, I obtained unique insight into the back office functions of entities of all sizes, learning how an organisation runs end to end.</li>

            <li>I gained exposure to a diverse set of clients including, but not limited to, a listed cybersecurity group, superannuation entities and not-for-profit organisations.</li>

            <li>My keen attention to detail and my ability to interpret, apply and communicate complex accounting standards was highly regarded by both my colleagues and clients.</li>

            <li>From my experience managing small teams, I developed a number of key soft skills including stakeholder management, collaboration within a team, project and team management, critical thinking and unstructured problem solving.</li>

            <li>Working with a large listed cyber-security entity that included 14 entities, I prepared a full consolidation as well as the financial statement mapping. </li>

            <li>For a key client, I redesigned the entirety of a client’s equity section to be in line with accounting standards, including complex transactions between retained earnings, revaluation reserves, share based payment reserves and share capital. This culminated with the preparation of a new consolidated statement of changes in equity and a net impact on the client’s Income Statement of $7m. For my work on this I was recognised with a Red Award, an audit division quarterly excellence award.</li>

            <li>Working with a key recurring client, I maintained the client’s share based payment (‘SBP’) function for three years. This included performing the semi-annual calculations and creating the relevant journals to record the impact of the various SBP agreements in place and evaluating the appropriate treatment of new arrangements entered into by the client. For my work on this I was recognised with an Auditor of the Month award.</li>

            <li>I adapted to learn the sophisticated requirements of superannuation financial and compliance reporting. I performed my work to a high quality and within a tight deadline for multiple superannuation entities. For my work on these entities I was recognised with an Auditor of the Month award.</li>

            <li>I also have detailed experience working on complicated financial statement areas such as revenue (AASB 15 application), financial loans, remuneration reports, inventory of a large clothing retailer, and investments of a superannuation entity.</li>

            <li>Awarded the 'Red Award' - Audit division quarterly award</li>

            <li>Twice awarded the 'Auditor of the Month'</li>
          </ul>

          <button onClick={() => exitJobCard('BDO')} className='exit-btn'>X</button>
        </div> */}
      </section>
      
      <section className='basic-info unhidden'>
        {renderFrontCard()}
          {/* <div onClick={() => flipJobInfo('GA')} className="tile">
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
          </div> */}
        </section>
    </div>
  )
}

export default Experience