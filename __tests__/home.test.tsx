import { render, screen } from '@testing-library/react'

describe('Smoke test', () => {
  it('перевіряє, чи Jest взагалі працює', () => {
    expect(1 + 1).toBe(2)
  })
})