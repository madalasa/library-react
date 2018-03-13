import React from 'react';
import { Route } from 'react-router-dom';
import Book from '../components/Book';

export default class SearchBook extends React.Component {

    constructor(props){
        super(props);
        this.state = {textValue: ''}
    }

    textValueChange = (e) => {
        this.setState({textValue: e.target.value})
    }

    submitContact= (e) => {
        console.log('In submit moving to book val:'+this.state.textValue);
        this.props.history.push("/book/"+this.state.textValue);
    }

    render() {
        return (
            <div>
            <div>
                <h1>Search Book</h1>
                <div>                
                    <input type = "text" value = {this.state.textValue}
                    onChange = {this.textValueChange}/>
                </div>
                <button onClick={this.submitContact}>Search</button>                                
            </div>
            <div>
                <Route path="/book/:bookId" component={Book}/>
            </div>
            </div>    
        );

    }
}

// export default withRouter(SearchContact);