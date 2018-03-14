
import React from 'react';
import {findBook} from '../../xhr/library-client';
// import BookInstance from './BookInstance';
import { Link } from 'react-router-dom';

export default class Book extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
            genre: '',
            description: ''
        }
    }

    getAuthor = (author) => {
        return {
            id: author._id,
            name: author.first_name+' '+author.last_name            
        } 
    }

    getBook = (bookData) => {
        let book = bookData.data.book;
        let authors = book.author.map(author => this.getAuthor(author));

        this.setState( {
            title: book.title,
            authors: authors,
            genre: book.genre.name,
            description: book.description
        });
    }

    componentDidMount = () => {
        let bookId = this.props.match.params.bookId;
        let bookPromise = findBook(bookId);

        bookPromise.then(di => {
            console.log('books from axios:' + JSON.stringify(di.data.book));
            this.getBook(di);
        }
        ).catch(function (err) {
            console.log(err);
        })
    };

    authorsPrint = (authors) => {
        
        return authors.map(author => {
            let authId = '/author/'+author.id;
            return <Link key = {authId} to={authId}>{author.name}</Link>
        })
    }

    bookDetails = () => {
        console.log('book details:' + this.state);
        if (this.state.title) {
            return (<div>
                Title: {this.state.title} <br />
                Authors: {this.authorsPrint(this.state.authors)} <br />
                Genres: {this.state.genre} <br />
                Description: {this.state.description} <br />
            </div>)
        }
        else {
            return <div>Book not found</div>
        }

    }

    render = () => {
        return this.bookDetails()
    }
}