import React from 'react';
import Home from '../components/Home';
import SearchContact from '../components/SearchContact'
import SearchAuthor from '../components/SearchAuthor'
import Book from '../components/Book'
import BookInstance from '../components/BookInstance'
import Author from '../components/Author'

import {
  Route,
} from 'react-router-dom'

const Header = () => (<header>
  Welcome to Address book Page
  <hr />
</header>
)

const Footer = () => (
  <footer>
    <hr />
  </footer>

)

let AppLayout = function (props) {
  return (
    <div>
      <Header />
      <main>

        <Route path="/" component={Home} />
        
        <Route path="/searchcontact" component={SearchContact} />
        <Route path="/author" component={SearchAuthor} />
        {/* <Route path="/book" component={Book} /> */}
        <Route path="/bookinstance" component={BookInstance} />

      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
