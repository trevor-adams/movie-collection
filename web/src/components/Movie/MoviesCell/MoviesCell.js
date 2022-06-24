import { Link, routes } from '@redwoodjs/router'

import Movies from 'src/components/Movie/Movies'

export const QUERY = gql`
  query FindMovies {
    movies {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No movies yet. '}
      <Link to={routes.newMovie()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ movies }) => {
  return <Movies movies={movies} />
}
