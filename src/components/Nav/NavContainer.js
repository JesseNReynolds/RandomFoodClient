import React from 'react';
import NavItem from './NavItem.js'

export default class NavContainer extends React.Component {

    render() {
        return(
            <div>
                <ul>
                    <NavItem path="/history" display="My past results"/>
                </ul>
            </div>

        )
    }

}
