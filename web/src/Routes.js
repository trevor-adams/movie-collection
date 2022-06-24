// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import MoviesLayout from 'src/layouts/MoviesLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MoviesLayout}>
        <Route path="/movies/new" page={MovieNewMoviePage} name="newMovie" />
        <Route path="/movies/{id:Int}/edit" page={MovieEditMoviePage} name="editMovie" />
        <Route path="/movies/{id:Int}" page={MovieMoviePage} name="movie" />
        <Route path="/movies" page={MovieMoviesPage} name="movies" />
      </Set>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
