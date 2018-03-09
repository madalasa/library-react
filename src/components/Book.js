import React from 'react';
import BookInstance from './BookInstance';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

export default class Book extends React.Component {

    render() {
        return (
            <div>
                This is the book page 
                <ul>  
                <li><Link to="/author">From Book to Author </Link>   </li>
                <li><Link to="/bookinstance">From Book to Book Instance </Link>   </li>
                </ul>
                {console.log('book this props:'+JSON.stringify( this.props))} 
                
            </div>
        );

    }
}