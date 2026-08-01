import campusMapGuide from '../assets/campus-map-guide.png'
import BrowserMockup from '../components/BrowserMockup'

const locations = [
  ['De Anza location', 'https://maps.app.goo.gl/7CAygqfMiLQjEXkP8'],
  ['Flint Center Parking Structure', 'https://maps.app.goo.gl/RzvPFVJiEi3btyXdA'],
  ['Registration & Student Services', 'https://maps.app.goo.gl/ohuxoV8d51iN2Y3z5'],
  ['S Quad Building', 'https://maps.app.goo.gl/PoSAxyVELiUc8mja9'],
  ['De Anza Parking Lot E', 'https://maps.app.goo.gl/3KncBRJAdW6KTKe8'],
  ['De Anza College Library', 'https://maps.app.goo.gl/Cf9hZWBzmzc1DUnU8'],
  ['Building G', 'https://maps.app.goo.gl/2EYn78NTJcdLWqVNA'],
  ['Baseball Field', 'https://maps.app.goo.gl/irsWJUBviFrtDhfm7'],
  ['Tennis Court', 'https://maps.app.goo.gl/DhHkRStSGSjnJjvm6'],
  ['Soccer Field', 'https://maps.app.goo.gl/s3zuCcKLBQHNKqVNA'],
  ['College Soccer Field Parking Lot C', 'https://maps.app.goo.gl/Fjo5wB8THDSRk9DD8'],
]

export default function CampusMap() {
  return (
    <article className="page-container campus-map-page" style={{ paddingTop: '4rem', paddingBottom: '8rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="heading-pill">Campus Map</h1>
        <p style={{ color: 'var(--ink-muted)', fontSize: '1.1rem' }}>Find your way around De Anza College</p>
      </div>

      <div className="campus-map-layout">
        <div>
          <BrowserMockup>
            <img
              src={campusMapGuide}
              alt="De Anza College campus map"
            />
          </BrowserMockup>
        </div>

        <div>
          <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', marginTop: 0, marginBottom: '1.5rem', fontSize: '1.5rem' }}>Important Locations</h3>
          <ul className="campus-map-links">
            {locations.map(([name, url]) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
