import React from 'react';
import Search from '../common/Search';
// import Author from './Author';
// import {Route} from 'react-router-dom';

export default class SearchAuthor extends React.Component {
    submitContact= (e, textValue) => {
        console.log('In submit moving to author: '+textValue);
        this.props.history.push("/author/"+textValue);
    }

    render() {
        return <Search heading='Search Author' submitContact={this.submitContact}/>
    }
}