import React from 'react';
// import SearchContact from './SearchContact';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    Reminders filled in later
                </div>
                <div>
                    <ul>
                        <li><Link to='/book'>Search Book </Link> </li>
                        <li><Link to='/author'>Search Author </Link> </li>
                     </ul>   
                </div>
            </div>
        );
    }
}