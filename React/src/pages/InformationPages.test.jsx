import { render, screen } from '@testing-library/react'
import Registration from './Registration'
import Transferring from './Transferring'
import VtaCard from './VtaCard'
import CampusMap from './CampusMap'
import AboutUs from './AboutUs'

test('shows registration guidance', () => {
  render(<Registration />)

  expect(screen.getByRole('heading', { name: /priority registration/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /general education/i })).toBeInTheDocument()
  expect(screen.getByAltText('MyPortal registration screen')).toBeInTheDocument()
  expect(screen.getByAltText('Student Registration Dashboard')).toBeInTheDocument()
  expect(screen.getByAltText('Degree Works What-if guidance')).toBeInTheDocument()
})

test('shows transfer resources and TAG eligibility', () => {
  render(<Transferring />)

  expect(screen.getByRole('heading', { name: 'ASSIST' })).toBeInTheDocument()
  expect(screen.getByText(/UC Berkeley, UCLA, and UC San Diego do not offer TAG/i)).toBeInTheDocument()
})

test('links transfer students to the official ASSIST website', () => {
  render(<Transferring />)

  expect(screen.getByRole('link', { name: 'ASSIST website' })).toHaveAttribute(
    'href',
    'https://assist.org/',
  )
  expect(screen.getByRole('link', { name: 'ASSIST website' })).toHaveAttribute('target', '_blank')
})

test('shows the VTA document requirement', () => {
  render(<VtaCard />)

  expect(screen.getByText(/passport or driver license/i)).toBeInTheDocument()
})

test('shows VTA pickup locations and the map directions link', () => {
  render(<VtaCard />)

  expect(screen.getByAltText('Hinson Campus Center')).toBeInTheDocument()
  expect(screen.getByAltText('Office of College Life')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /google maps directions/i })).toHaveAttribute(
    'href',
    'https://maps.app.goo.gl/gGKmJ2WGnR2RyXq46?g_st=ic',
  )
})

test('opens the De Anza location in a new tab', () => {
  render(<CampusMap />)

  expect(screen.getByRole('link', { name: /de anza location/i })).toHaveAttribute('target', '_blank')
})

test('shows the campus map image and unique external location links', () => {
  render(<CampusMap />)

  expect(screen.getByAltText('De Anza College campus map')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Tennis Court' })).toHaveAttribute(
    'href',
    'https://maps.app.goo.gl/DhHkRStSGSjnJjvm6',
  )
  expect(screen.getAllByRole('link', { name: 'Registration & Student Services' })).toHaveLength(1)
})

test('renders the Main.cpp mission and contact section', () => {
  render(<AboutUs />)

  expect(screen.getByRole('heading', { name: 'Main.cpp' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /our contact information/i })).toBeInTheDocument()
})

test('uses shared layout and visual primitives on information pages', () => {
  const { container, unmount } = render(<Registration />)

  expect(container.querySelector('.registration-page')).toHaveClass('page-container')
  expect(screen.getByRole('heading', { name: /priority registration/i })).toHaveClass(
    'heading-pill',
  )

  unmount()
  const transferringView = render(<Transferring />)

  expect(transferringView.container.querySelector('.transferring-page')).toHaveClass(
    'page-container',
  )
  expect(screen.getByRole('heading', { name: 'ASSIST' })).toHaveClass('heading-pill')

  transferringView.unmount()
  const vtaView = render(<VtaCard />)

  expect(vtaView.container.querySelector('.vta-page')).toHaveClass('page-container')
  expect(screen.getByAltText('Hinson Campus Center')).toHaveClass('framed-image')

  vtaView.unmount()
  const mapView = render(<CampusMap />)

  expect(mapView.container.querySelector('.campus-map-page')).toHaveClass('page-container')
  expect(screen.getByAltText('De Anza College campus map')).toHaveClass('framed-image')
})
