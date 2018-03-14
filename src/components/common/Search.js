import React from 'react';

export default class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {textValue: ''}
    }

    textValueChange = (e) => {
        this.setState({textValue: e.target.value})
    }

    render() {
        return (
 
            <div>
                <h1>{this.props.heading}</h1>
                <div>                
                    <input type="text" value = {this.state.textValue}
                    onChange = {this.textValueChange}/>
                </div>
                <button onClick={(e) => this.props.submitContact(e, this.state.textValue)}>Search</button>                                
            </div>
 
        );
    }

}    