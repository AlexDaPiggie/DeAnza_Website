import SectionHeading from '../components/SectionHeading'

export default function AboutUs() {
  return (
    <article className="page-container article about" style={{ backgroundColor: 'var(--bg-card)', padding: '4rem', borderRadius: '16px', boxShadow: 'var(--shadow-card)', border: '1px solid var(--border)', marginTop: '4rem', marginBottom: '8rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="serif-title" style={{ color: 'var(--accent)', fontSize: '3.5rem', margin: 0 }}>Main.cpp</h1>
        <p style={{ color: 'var(--ink-muted)', fontSize: '1.25rem', marginTop: '0.5rem' }}>De Anza Programming Club</p>
      </div>

      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h2 className="serif-title">Our Goal</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--ink-muted)' }}>
          Helping people through our ideas and projects, while students can experience practical coding and build a portfolio.
        </p>

        <h2 className="serif-title">Activities</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--ink-muted)' }}>
          Our club provides opportunities to work on long-term programming projects and participate in short activities such as competitions.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--ink-muted)' }}>
          We are looking for passionate students who love coding or helping other people and are excited to work with us. Do not hesitate to join!
        </p>

        <h2 className="serif-title">Contact Information</h2>
        <ul className="timeline-list" style={{ marginTop: '1.5rem' }}>
          <li className="timeline-item" style={{ marginBottom: '1.5rem' }}>
             <span className="timeline-badge" style={{ width: '1rem', height: '1rem', left: '-2.25rem', backgroundColor: 'var(--accent)' }}></span>
            <a href="https://www.instagram.com/deanza_main.cpp/" target="_blank" rel="noreferrer" style={{ fontSize: '1.1rem' }}>
              Instagram @deanza_main.cpp
            </a>
          </li>
          <li className="timeline-item" style={{ marginBottom: '1.5rem' }}>
             <span className="timeline-badge" style={{ width: '1rem', height: '1rem', left: '-2.25rem', backgroundColor: 'var(--accent)' }}></span>
            <a href="mailto:main.cppDeanza@gmail.com" style={{ fontSize: '1.1rem' }}>
              main.cppDeanza@gmail.com
            </a>
          </li>
          <li className="timeline-item" style={{ marginBottom: '1.5rem' }}>
             <span className="timeline-badge" style={{ width: '1rem', height: '1rem', left: '-2.25rem', backgroundColor: 'var(--accent)' }}></span>
            <a href="https://discord.gg/h8Mb568H4a" target="_blank" rel="noreferrer" style={{ fontSize: '1.1rem' }}>
              Join our Discord
            </a>
          </li>
        </ul>

        <h2 className="serif-title">Project Contributors</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--ink-muted)', fontStyle: 'italic' }}>
          Esther, Chaewon, Phong, Tristan, Nichelle, Caleb, and Angel.
        </p>
      </div>
    </article>
  )
}
