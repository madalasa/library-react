import React from 'react';
import {Link} from 'react-router-dom';

export default class SearchAuthor extends React.Component {
    submitContact = (e) => {
        console.log('In submit moving to book'+e.target+", "+this.props.history);
        this.props.history.push("/book");
    }

    render() {
        return (
            <div>
                <div>
                    <input type='text' name='search'/>
                </div>
                <button onClick={this.submitContact}>Search</button>
                <div><Link to="/book">Book</Link></div>
           
            </div>
        );

    }
}