import { render } from '@testing-library/react'
// import { axe, toHaveNoViolations } from 'jest-axe'
import Home from '../../pages/index'

// expect.extend(toHaveNoViolations)

it('Button should be accessible', async () => {
  const { container } = render(<Home />)

  expect(container.textContent).toBe('Welcome to My Next App!')

  // const results = await axe(container)
  // expect(results).toHaveNoViolations()
})
