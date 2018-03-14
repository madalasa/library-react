
import React from 'react';
import axios from 'axios';

// import BookInstance from './BookInstance';
// import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default class Book extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: ''
        }
    }

    findBook = (id) => {
        return axios.get('http://localhost:3500/catalog/books/'+id);
    }

    componentDidMount = () => {
        let bookId = this.props.match.params.bookId;
        let bookPromise = this.findBook(bookId);

        bookPromise.then(di => {
            console.log('books from axios:' + JSON.stringify(di));
            console.log('books from axios:' + JSON.stringify(di.data.book));
            this.setState({
                title: di.data.book.title,
                author: di.data.book.author[0].first_name
            })
        }
        )
    };

    bookDetails = () => {
        
        if(!this.title) {
            return (<div>
                Title: {this.state.title} <br />
                Author: {this.state.author} <br />
            </div>)
        }
        else{
            return <div>Book not found</div>
        }
                
    }

    render = () => {
         return  this.bookDetails() 
    }
}