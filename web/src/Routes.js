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

import LandingLayout from './layouts/LandingLayout/LandingLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MoviesLayout}>
        <Route path="/admin/movies/new" page={MovieNewMoviePage} name="newMovie" />
        <Route path="/admin/movies/{id:Int}/edit" page={MovieEditMoviePage} name="editMovie" />
        <Route path="/admin/movies/{id:Int}" page={MovieMoviePage} name="movie" />
        <Route path="/admin/movies" page={MovieMoviesPage} name="movies" />
      </Set>
      <Set wrap={LandingLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
