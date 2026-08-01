import myPortal from '../assets/registration-myportal.png'
import dashboard from '../assets/registration-dashboard.png'
import steps from '../assets/registration-steps.png'
import student_registration from '../assets/student-registration.png'
import preparation from '../assets/registration-preparation.png'
import degreeWorks from '../assets/registration-degreeworks.png'
import whatif from '../assets/registration-whatif.png'
import BrowserMockup from '../components/BrowserMockup'

function Topic({ title, children }) {
  return (
    <section className="registration-topic">
      <h2 className="heading-pill">{title}</h2>
      {children}
    </section>
  )
}

export default function Registration() {
  return (
    <article className="page-container registration-page">

      <Topic title="Priority Registration">
        <p>When you <a href="https://www.deanza.edu/apply-and-register/" target="_blank" rel="noreferer">apply to De Anza</a>, be sure to complete these important steps:</p>
        <ol className="timeline-list">
          <li className="timeline-item">
            <span className="timeline-badge">1</span>
            <strong>Declare a major</strong>, not “undecided,” on the application.
          </li>
          <li className="timeline-item">
            <span className="timeline-badge">2</span>
            <strong>Select a goal</strong> of transfer, degree, or certificate.
          </li>
          <li className="timeline-item">
            <span className="timeline-badge">3</span>
            Complete <a href="https://deanza.edu/assessment/" target="_blank" rel="noreferer">assessment</a> and <a href="https://www.deanza.edu/apply-and-register/orientation.html" target="_blank" rel="noreferer">orientation</a>.
          </li>
          <li className="timeline-item">
            <span className="timeline-badge">4</span>
            Create an <a href="https://www.deanza.edu/apply-and-register/ed-plan.html" target="_blank" rel="noreferer">educational plan</a>.
          </li>
        </ol>
      </Topic>

      <Topic title="Picking a Good Professor">
        <ol className="timeline-list">
          <li className="timeline-item">
            <span className="timeline-badge">1</span>
            Check <a href="https://www.ratemyprofessors.com/" target="_blank" rel="noreferer">Rate My Professor</a> for student feedback.
          </li>
          <li className="timeline-item">
            <span className="timeline-badge">2</span>
            Check <a href="https://www.reddit.com/r/DeAnza/" target="_blank" rel="noreferer">Reddit</a> for extra information and course recommendations.
          </li>
          <li className="timeline-item">
            <span className="timeline-badge">3</span>
            Check <a href="https://www.deanzagrades.com/" target="_blank" rel="noreferer">DaGrades</a> to view historic grade distributions.
          </li>
        </ol>
      </Topic>

      <Topic title="Registration Steps">
        <ol className="timeline-list">
          <li className="timeline-item">
            <span className="timeline-badge">1</span>
            <h3>Go to MyPortal</h3>
            <p>Access the <a href="https://www.deanza.edu/" target="_blank" rel="noreferer">De Anza MyPortal</a> to begin.</p>
            <BrowserMockup>
              <img src={myPortal} alt="MyPortal registration screen" />
            </BrowserMockup>
          </li>
          
          <li className="timeline-item">
            <span className="timeline-badge">2</span>
            <h3>Go to Student Registration</h3>
            <BrowserMockup>
              <img src={student_registration} alt="Student Registration workflow" />
            </BrowserMockup>
          </li>
          
          <li className="timeline-item">
            <span className="timeline-badge">3</span>
            <h3>Choose “Registration Dashboard”</h3>
            <BrowserMockup>
              <img src={dashboard} alt="Student Registration Dashboard" />
            </BrowserMockup>
          </li>

          <li className="timeline-item">
            <span className="timeline-badge">4</span>
            <h3>Prepare for Registration</h3>
            <p>Fill out the required information and check your registration time.</p>
            <BrowserMockup>
              <img src={preparation} alt="Student Registration Card" />
            </BrowserMockup>
          </li>

          <li className="timeline-item">
            <span className="timeline-badge">5</span>
            <h3>Complete Registration</h3>
            <p>Add the classes you need for your educational plan.</p>
            <BrowserMockup>
              <img src={steps} alt="Classes Registration Card" />
            </BrowserMockup>
          </li>
        </ol>
      </Topic>

      <Topic title="General Education (GE) Requirements">
        <ol className="timeline-list">
          <li className="timeline-item">
            <span className="timeline-badge">1</span>
            <h3>Go to Degree Works</h3>
            <p>Access Degree Works from MyPortal to see your progress.</p>
            <BrowserMockup>
              <img src={degreeWorks} alt="Degree Works guidance" />
            </BrowserMockup>
          </li>
          
          <li className="timeline-item">
            <span className="timeline-badge">2</span>
            <h3>Click on "What-If"</h3>
            <p>Choose your intended program to see exactly what GE classes are required.</p>
            <BrowserMockup>
              <img src={whatif} alt="Degree Works What-if guidance" />
            </BrowserMockup>
          </li>
        </ol>
      </Topic>

    </article>
  )
}
