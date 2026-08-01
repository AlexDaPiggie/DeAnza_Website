import InfoCard from '../components/InfoCard'
import registrationCard from '../assets/registration-card.png'
import transferringCard from '../assets/transferring-card.png'
import vtaCard from '../assets/vta-card.png'
import campusMapCard from '../assets/campus-map-card.png'

const cards = [
  [
    '/registration',
    'Student Registration',
    'Plan your classes and complete registration steps.',
    registrationCard,
    'Student registration guidance',
  ],
  [
    '/transferring',
    'Transferring',
    'Explore ASSIST, TAG, and transfer resources.',
    transferringCard,
    'Transfer planning guidance',
  ],
  [
    '/vta-card',
    'VTA Card',
    'Learn how to use your student SmartPass.',
    vtaCard,
    'VTA SmartPass guidance',
  ],
  [
    '/campus-map',
    'Campus Map',
    'Find campus buildings, services, and parking.',
    campusMapCard,
    'De Anza campus map',
  ],
]

export default function Home() {
  return (
    <div className="page-shell home">
      <section className="home-hero">
        <p className="eyebrow">De Anza College</p>
        <h1 className="serif-title">Welcome to De Anza</h1>
        <p style={{ color: 'var(--ink-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>
          We are here to help you prepare for your study at De Anza College with clear, step-by-step guides.
        </p>
      </section>

      <section className="card-grid" aria-label="Student resources">
        {cards.map(([to, title, description, image, alt]) => (
          <InfoCard
            key={to}
            to={to}
            title={title}
            description={description}
            image={image}
            alt={alt}
          />
        ))}
      </section>
    </div>
  )
}
