import { render } from '@redwoodjs/testing/web'

import MovieArticle from './MovieArticle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MovieArticle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MovieArticle />)
    }).not.toThrow()
  })
})
