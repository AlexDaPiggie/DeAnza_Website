import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Main.cpp</h4>
          <p>
            Helping people through our ideas and projects, while students can experience practical coding and build a portfolio.
          </p>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/registration">Student Registration</NavLink></li>
            <li><NavLink to="/transferring">Transferring</NavLink></li>
            <li><NavLink to="/vta-card">VTA Card</NavLink></li>
            <li><NavLink to="/campus-map">Campus Map</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/deanza_main.cpp/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://discord.gg/h8Mb568H4a" target="_blank" rel="noreferrer">
                Discord
              </a>
            </li>
            <li>
              <a href="mailto:main.cppDeanza@gmail.com">
                Email Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Made with ❤️ by Main.cpp @ De Anza College</p>
      </div>
    </footer>
  )
}
