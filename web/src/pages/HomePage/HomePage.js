import { MetaTags } from '@redwoodjs/web'

import MovieArticlesCell from 'src/components/MovieArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <MovieArticlesCell />
    </>
  )
}

export default HomePage
