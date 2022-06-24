import { render } from '@redwoodjs/testing/web'

import MovieLayout from './MovieLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MovieLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MovieLayout />)
    }).not.toThrow()
  })
})
