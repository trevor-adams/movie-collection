import { MetaTags } from '@redwoodjs/web'

import MovieArticlesCell from 'src/components/MovieArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <MovieArticlesCell />
    </>
  )
}

export default HomePage
