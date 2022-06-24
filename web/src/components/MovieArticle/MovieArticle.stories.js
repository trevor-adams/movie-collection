import MovieArticle from './MovieArticle'
import { standard } from './MovieArticle.mock'

const movie = standard()
export const generated = () => {
  return <MovieArticle movie={movie} />
}

export default { title: 'Components/MovieArticle' }
