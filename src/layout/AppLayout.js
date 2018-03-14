import React from 'react';
import Home from '../components/Home';
import SearchBook from '../components/books/SearchBook'
import SearchAuthor from '../components/authors/SearchAuthor'
 import Book from '../components/books/Book'
// import Author from '../components/authors/Author'

import {
  Route, Link
} from 'react-router-dom'

const Header = () => (
<header>
  Welcome to Library System
  <hr />
</header>
)

const Navigation = () => (
<div>
  <Link to='/'>Home</Link>
  <Link to='/book'>Books</Link>
  <Link to='/author'>Authors</Link>
</div>
)


const Footer = () => (
  <footer>
    <hr />
    This is solely a sample application!!
  </footer>

)

let AppLayout = function (props) {
  return (
    <div>
      <Header />
      <main>
        <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/book" component={SearchBook} />
          <Route path="/book/:bookId" component={Book}/>
          <Route exact path="/author" component={SearchAuthor} />
          
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
