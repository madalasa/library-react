import React from 'react';
import Search from '../common/Search';

// import { Route } from 'react-router-dom';
// import Book from './Book';

export default class SearchBook extends React.Component {

    submitContact= (e, textValue) => {
        console.log('In submit moving to book val:'+textValue);
        this.props.history.push("/book/"+textValue);
    }

    render() {
        return <Search heading='Search Book' submitContact={this.submitContact}/>
    }
}
