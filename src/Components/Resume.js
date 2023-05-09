import Experience from './Experience/Experience'
import Education from './Education/Education'

function Resume() {

  return (
    <div className="resume">
      <Experience />
      <Education />
    </div>
  )
}

// function Resume() {
//   return (
//     <div className="resume">
//       <h1>Resume</h1>

//       <embed src='/gstephen-resume.pdf'></embed>
//     </div>
//   )
// }

export default Resume