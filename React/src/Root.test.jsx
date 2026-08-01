import { render, screen } from '@testing-library/react'
import Root from './Root'

test('provides routing context to the application', () => {
  render(<Root />)
  expect(screen.getByRole('heading', { name: /welcome to de anza college/i })).toBeInTheDocument()
})
