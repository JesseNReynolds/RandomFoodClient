import React from 'react';
import NavItem from './NavItem.js'

export default class NavContainer extends React.Component {

    render() {
        return(
            <div>
                <ul>
                    <NavItem />
                    <NavItem />
                </ul>
            </div>
        )
    }

}
