import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'

// Smoke test: verify the test environment is working correctly
describe('Vitest + jsdom environment', () => {
  it('renders a React element to the DOM', () => {
    render(React.createElement('h1', null, 'Mariele Marques'))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Mariele Marques')
  })

  it('supports DOM queries', () => {
    render(
      React.createElement(
        'div',
        { 'data-testid': 'wrapper' },
        React.createElement('p', null, 'Hello from marielemarques')
      )
    )
    const wrapper = screen.getByTestId('wrapper')
    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveTextContent('Hello from marielemarques')
  })

  it('handles boolean attributes via jest-dom matchers', () => {
    render(React.createElement('button', { disabled: true }, 'Agendar')    )
    expect(screen.getByRole('button', { name: 'Agendar' })).toBeDisabled()
  })
})

// Basic data validation: ensure environment constants are available
describe('process.env', () => {
  it('NODE_ENV is defined', () => {
    expect(process.env.NODE_ENV).toBeDefined()
  })
})
