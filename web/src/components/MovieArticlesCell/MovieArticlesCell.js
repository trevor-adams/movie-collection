import MovieArticle from '../MovieArticle/MovieArticle'
export const QUERY = gql`
  query MovieArticlesQuery {
    movies {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieArticle movie={movie} />
          </li>
        )
      })}
    </ul>
  )
}
