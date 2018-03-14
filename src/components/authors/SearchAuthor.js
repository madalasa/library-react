import React from 'react';
// import Author from './Author';
// import {Route} from 'react-router-dom';

export default class SearchAuthor extends React.Component {
    submitContact = (e) => {
        console.log('In submit moving to book'+e.target+", "+this.props.history);
        this.props.history.push("/author/2");
    }

    render() {
        return (
            <div>
            <div>
                <h1> Search Author</h1>
                <div>
                    <input type='text' name='search'/>
                </div>
                <button onClick={this.submitContact}>Search</button>                
            </div>
            </div>
        );

    }
}