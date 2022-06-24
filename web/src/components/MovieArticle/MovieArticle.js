const MovieArticle = ({ movie }) => {
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            {movie.title} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{movie.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{movie.title}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{movie.body}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default MovieArticle
