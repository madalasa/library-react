import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './layout/AppLayout'
// import Home from './components/Home';
// import SearchBook from './components/books/SearchBook'
// import SearchAuthor from './components/authors/SearchAuthor'
// import Book from '../components/Book'


import {
  BrowserRouter as Router, Route
} from 'react-router-dom'

const Routes = () => (
  <Router>
      <Route path="/" component={AppLayout} />
  </Router>
)

ReactDOM.render(<Routes />, document.getElementById('root'));