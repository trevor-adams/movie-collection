import Movie from 'src/components/Movie/Movie'

export const QUERY = gql`
  query FindMovieById($id: Int!) {
    movie: movie(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Movie not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ movie }) => {
  return <Movie movie={movie} />
}
