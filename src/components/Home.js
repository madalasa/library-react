import React from 'react';
import SearchContact from './SearchContact';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    Reminders filled in later
                </div>
                <div>
                    <SearchContact/>
                </div>    
            </div>
        );
    }
}