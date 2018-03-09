import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchContact extends React.Component {

    submitContact = (e) => {
        this.props.history.push("/book");
        console.log('After In submit props, '+JSON.stringify( this.props));
    }

    render() {
        return (
            <div>
                <h1>Search Contact</h1>
                <div>
                    <input type='text' name='search' />
                </div>
                <button onClick={this.submitContact}>Search</button>                
            </div>
        );

    }
}

export default withRouter(SearchContact);