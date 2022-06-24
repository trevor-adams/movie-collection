import { movies, movie, createMovie, updateMovie, deleteMovie } from './movies'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('movies', () => {
  scenario('returns all movies', async (scenario) => {
    const result = await movies()

    expect(result.length).toEqual(Object.keys(scenario.movie).length)
  })

  scenario('returns a single movie', async (scenario) => {
    const result = await movie({ id: scenario.movie.one.id })

    expect(result).toEqual(scenario.movie.one)
  })

  scenario('creates a movie', async () => {
    const result = await createMovie({
      input: { title: 'String', body: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a movie', async (scenario) => {
    const original = await movie({ id: scenario.movie.one.id })
    const result = await updateMovie({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a movie', async (scenario) => {
    const original = await deleteMovie({ id: scenario.movie.one.id })
    const result = await movie({ id: original.id })

    expect(result).toEqual(null)
  })
})
