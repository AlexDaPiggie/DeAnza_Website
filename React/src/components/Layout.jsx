import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="site-layout">
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
