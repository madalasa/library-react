import React from 'react';
import {findAuthor} from '../../xhr/library-client';
import { Link } from 'react-router-dom';

export default class Author extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            books: ''
        }
    }

    getBook = (book) => {
        return {
            id: book._id,
            title: book.title            
        } 
    }

    getAuthor = (authorData) => {        
        let author = authorData.data.author;
        console.log('authors from axios:' + JSON.stringify(author));
        let books = authorData.data.books.map(book => this.getBook(book));

        this.setState( {
            name: author.first_name+","+author.last_name,
            books: books,
            description: author.description
        });
    }

    componentDidMount = () => {
        let authorId = this.props.match.params.authorId;
        let authorPromise = findAuthor(authorId);

        authorPromise.then(di => {            
            this.getAuthor(di);
        }
        ).catch(function (err) {
            console.log(err);
        })
    };

    booksPrint = (books) => {        
        return books.map(book => {
            let bookId = '/book/'+book.id;
            return <Link key = {bookId} to={bookId}>{book.title}</Link>
        })
    }

    authorDetails = () => {
        console.log('author details:' + this.state.name);
        if (this.state.name) {
            return (<div>
                Name: {this.state.name} <br />                                
                Description: {this.state.description} <br />
                Books: {this.booksPrint(this.state.books)} <br />
            </div>)
        }
        else {
            return <div>Author not found</div>
        }

    }

    render() {
        return this.authorDetails();

    }
}