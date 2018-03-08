import React from 'react';
import Home from '../components/Home';
import SearchContact from '../components/SearchContact'
import Book from '../components/Book'
import BookInstance from '../components/BookInstance'
import Author from '../components/Author'

import {
  Route,
  Switch,
  Link,
} from 'react-router-dom'

const Header = () => (<header>
  Welcome to Address book Page
  <hr />
  </header>
  )

const Footer = () => (
  <footer>
          <hr/>          
        </footer>

)

let AppLayout = function(props) {
    return (
      <div>
        <Header/>
        <main>
        <Switch>  
          <Route path="/" component={Home}/>        
          <Route path="/searchcontact" component={SearchContact} />
          <Route path="/book" component={Book} />        
          <Route path="/author" component={Author} /> 
          <Route path="/bookinstance" component={BookInstance} />                   
        </Switch>

        </main>
        <Footer />
      </div>
    )
  }
  
  export default AppLayout
  