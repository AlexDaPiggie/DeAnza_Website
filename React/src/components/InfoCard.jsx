import { Link } from 'react-router-dom'

export default function InfoCard({ to, title, description, image, alt }) {
  return (
    <Link className="info-card" to={to}>
      <img className="card-image" src={image} alt={alt} />

      <div className="card-copy">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>Explore →</span>
      </div>
    </Link>
  )
}
