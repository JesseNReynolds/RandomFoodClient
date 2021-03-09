import React from 'react';
import { Link } from 'react-router-dom';

export default class NavItem extends React.Component {

render() {
    return (
        <li>
            <Link to={this.props.path}>{this.props.display}</Link>
        </li>
    )
}

}

