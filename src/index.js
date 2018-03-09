import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './layout/AppLayout'
// import SearchContact from './components/SearchContact'
// import Book from './components/Book'
// import BookInstance from './components/BookInstance'
// import Author from './components/Author'

import {
  BrowserRouter as Router,
  Route,  
  Link,
} from 'react-router-dom'

const Home1 = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
          </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
          </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
          </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home1</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home1} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

const PEEPS = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] }
];

const find = id => PEEPS.find(p => p.id == id);

const RecursiveExample = () => (
  <Router>
    <Person match={{ params: { id: 0 }, url: "" }} />
  </Router>
);

const Person = ({ match }) => {
  const person = find(match.params.id);

  return (
    <div>
      <h3>{person.name}’s Friends</h3>
      <ul>
        {person.friends.map(id => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person} />
    </div>
  );
};

const Routes = () => (

  <Router>
     <AppLayout/>
  </Router>
)


ReactDOM.render(<Routes />, document.getElementById('root'));