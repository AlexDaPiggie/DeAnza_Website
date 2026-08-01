import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

test('uses the corrected About Us navigation label and route', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  )

  expect(screen.getAllByRole('link', { name: 'About Us' })).toHaveLength(2)

  screen.getAllByRole('link', { name: 'About Us' }).forEach((link) => {
    expect(link).toHaveAttribute('href', '/about')
  })

  expect(screen.queryByText('Navigation Bar')).not.toBeInTheDocument()
})

test('opens the mobile navigation menu', async () => {
  const user = userEvent.setup()
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  )

  const button = screen.getByRole('button', { name: /open navigation menu/i })

  expect(button).toHaveAttribute('aria-expanded', 'false')

  await user.click(button)

  expect(button).toHaveAttribute('aria-expanded', 'true')
})
