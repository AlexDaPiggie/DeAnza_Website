import assistGuide from '../assets/transferring-assist.png'
import BrowserMockup from '../components/BrowserMockup'

const tagCampuses = [
  {
    name: 'UC Davis',
    href: 'https://www.ucdavis.edu/admissions/undergraduate/transfer/transfer-admission-guarantee',
  },
  {
    name: 'UC Irvine',
    href: 'https://www.admissions.uci.edu/apply/transfer-students/guaranteed-admissions.php',
  },
  {
    name: 'UC Merced',
    href: 'https://admissions.ucmerced.edu/transfer/tag',
  },
  {
    name: 'UC Riverside',
    href: 'https://admissions.ucr.edu/transfer/transfer-admission-guarantee',
  },
  {
    name: 'UC Santa Barbara',
    href: 'https://admissions.sa.ucsb.edu/tag',
  },
  {
    name: 'UC Santa Cruz',
    href: 'https://admissions.ucsc.edu/transfer-admission-guarantee-tag',
  },
]

export default function Transferring() {
  return (
    <article className="page-container transferring-page">
      <section id="assist" className="transferring-section">
        <h2 className="heading-pill">ASSIST</h2>
        <h3>Welcome to ASSIST</h3>
        <p>
          <a href="https://assist.org/" target="_blank" rel="noreferrer">ASSIST</a> is an official website where students can check which courses they need to transfer
          from a California community college to a UC or CSU.
        </p>
        <BrowserMockup>
          <img
            src={assistGuide}
            alt="ASSIST transfer course agreement walkthrough"
          />
        </BrowserMockup>
      </section>

      <section id="tag" className="transferring-section">
        <h2 className="heading-pill">Transfer Admission Guarantee (TAG)</h2>
        <h3>TAG guarantees admission to a participating UC campus</h3>
        <p>if students complete the required courses, maintain the required GPA, and submit their applications on time. Students must continue to meet all requirements even after applying.</p>
        
        <h3>Participating Campuses:</h3>
        <ul className="timeline-list" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
          {tagCampuses.map(({ name, href }, index) => (
            <li className="timeline-item" style={{ marginBottom: '1rem' }} key={name}>
              <span className="timeline-badge" style={{ width: '1.5rem', height: '1.5rem', left: '-2.5rem', fontSize: '0.8rem' }}>{index + 1}</span>
              <a href={href} target="_blank" rel="noreferrer">
                {name}
              </a>
            </li>
          ))}
        </ul>
        <p style={{ fontStyle: 'italic' }}>Note: UC Berkeley, UCLA, and UC San Diego do not offer TAG.</p>
      </section>

      <section id="honors" className="transferring-section">
        <h2 className="heading-pill">Honors Program</h2>
        <p>Get honors recognition on your official transcripts.</p>
        <h3>Eligibility Requirements</h3>
        <ul className="timeline-list" style={{ marginTop: '1rem' }}>
          <li className="timeline-item" style={{ marginBottom: '1rem' }}>
            <span className="timeline-badge" style={{ width: '1rem', height: '1rem', left: '-2.25rem', backgroundColor: 'var(--accent)' }}></span>
            Eligible for or completed EWRT 1A
          </li>
          <li className="timeline-item" style={{ marginBottom: '1rem' }}>
             <span className="timeline-badge" style={{ width: '1rem', height: '1rem', left: '-2.25rem', backgroundColor: 'var(--accent)' }}></span>
            Minimum 3.3 college GPA
          </li>
          <li className="timeline-item" style={{ marginBottom: '1rem' }}>
             <span className="timeline-badge" style={{ width: '1rem', height: '1rem', left: '-2.25rem', backgroundColor: 'var(--accent)' }}></span>
            At least 15 UC-transferable quarter units
          </li>
          <li className="timeline-item" style={{ marginBottom: '1rem' }}>
             <span className="timeline-badge" style={{ width: '1rem', height: '1rem', left: '-2.25rem', backgroundColor: 'var(--accent)' }}></span>
            Recent high school graduates: minimum 3.5 GPA
          </li>
        </ul>
      </section>
    </article>
  )
}
