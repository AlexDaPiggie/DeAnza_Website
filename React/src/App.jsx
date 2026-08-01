import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutUs from './pages/AboutUs'
import CampusMap from './pages/CampusMap'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Transferring from './pages/Transferring'
import VtaCard from './pages/VtaCard'

function page(Component) {
  return <Layout><Component /></Layout>
}

export default function App() {
  return <Routes>
    <Route path="/" element={page(Home)} />
    <Route path="/registration" element={page(Registration)} />
    <Route path="/transferring" element={page(Transferring)} />
    <Route path="/vta-card" element={page(VtaCard)} />
    <Route path="/campus-map" element={page(CampusMap)} />
    <Route path="/about" element={page(AboutUs)} />
  </Routes>
}
