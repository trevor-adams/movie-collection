export const schema = gql`
  type Movie {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    movies: [Movie!]! @skipAuth
    movie(id: Int!): Movie @skipAuth
  }

  input CreateMovieInput {
    title: String!
    body: String!
  }

  input UpdateMovieInput {
    title: String
    body: String
  }

  type Mutation {
    createMovie(input: CreateMovieInput!): Movie! @requireAuth
    updateMovie(id: Int!, input: UpdateMovieInput!): Movie! @requireAuth
    deleteMovie(id: Int!): Movie! @requireAuth
  }
`
