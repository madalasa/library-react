import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class SearchContact extends React.Component {

    submitContact = (e) => {
        this.props.history.push("/book");
        console.log('After In submit props, '+JSON.stringify( this.props));
    }

    render() {
        return (
            <div>
                <div>
                    <input type='text' name='search' />
                </div>
                <button onClick={this.submitContact}>Search</button>
                <div><Link to="/author">Author</Link></div>
            </div>
        );

    }
}

// export default withRouter(SearchContact);