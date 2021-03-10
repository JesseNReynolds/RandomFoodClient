import '../../style.css'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavItem from './NavItem.js'

class NavContainer extends Component {

    render() {
        return(
            <ul className='navbar'>
                <NavItem path="/" display="Home" />
                {this.props.user.length < 1 &&
                <NavItem path="/history" display="My Past Results"/>}
                {this.props.user.length < 1 &&
                <NavItem path="/login" display="Login" />}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userSlice.fbId
})

export default connect(mapStateToProps)(NavContainer)
