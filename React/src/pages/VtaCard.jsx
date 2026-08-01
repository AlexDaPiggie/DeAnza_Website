import hinsonCampusCenter from '../assets/vta-hinson-campus-center.png'
import officeOfCollegeLife from '../assets/vta-office-of-college-life.png'

export default function VtaCard() {
  return (
    <article className="page-container vta-page">
      
      <section className="transferring-section" style={{ textAlign: 'center', marginBottom: 0 }}>
        <h1 className="heading-pill">VTA SmartPass</h1>
        <p>
          The VTA SmartPass Card allows De Anza students to travel by bus for free throughout the quarter.
        </p>

        <div className="vta-location-grid">
          <div>
            <img
              className="framed-image"
              src={hinsonCampusCenter}
              alt="Hinson Campus Center"
            />
            <h3>Hinson Campus Center</h3>
          </div>
          <div>
            <img
              className="framed-image"
              src={officeOfCollegeLife}
              alt="Office of College Life"
            />
            <h3>Office of College Life</h3>
          </div>
        </div>

        <a
          className="vta-directions"
          href="https://maps.app.goo.gl/gGKmJ2WGnR2RyXq46?g_st=ic"
          target="_blank"
          rel="noreferrer"
        >
          Google Maps directions to the pickup locations ➔
        </a>

        <div className="vta-card-reminder">
          <p className="vta-card-reminder__documents">
            You must bring a legal document with your photo on it!
          </p>
          <p>
            Accepted documents:<br />
            <strong>Passport or Driver's License</strong>
          </p>
          <p style={{ marginTop: '1.5rem', fontSize: '0.95rem' }}>*You can also use this location to make your Student ID card.</p>
        </div>      

        <p className="vta-orientation-reminder">Please bring your documents with you on Orientation Day!</p>
      </section>

    </article>
  )
}
