import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

// Same 4 quick-link cards from the mockup. Kept as data (instead of
// 4 separate blocks of JSX) so adding a 5th card later is a one-line
// change, same idea as the NAV_LINKS array in Navbar.jsx.
const QUICK_LINKS = [
  { id: 'registration', label: 'Student Registration', icon: '📝', href: '#registration' },
  { id: 'transfer', label: 'Transferring Information', icon: '🎓', href: '#transfer' },
  { id: 'vta', label: 'VTA Card', icon: '🚌', href: '#vta' },
  { id: 'map', label: 'Campus Map', icon: '🗺️', href: '#map' },
];

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Welcome to De Anza College!</h1>
        <p>We are here to help you prepare for your study at De Anza College</p>
      </section>

      <section className="card-grid">
        {QUICK_LINKS.map((link) => (
          <a key={link.id} className={`card card--${link.id}`} href={link.href}>
            <div className="card-visual">{link.icon}</div>
            <div className="card-label">{link.label}</div>
          </a>
        ))}
      </section>

      <Footer />
    </>
  );
}

export default Home;
