import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavItem from './NavItem.js'

class NavContainer extends Component {

    render() {
        return(
            <div>
                <ul>
                    <NavItem path="/" display="Home" />
                    <NavItem path="/history" display="My past results"/>
                    {this.props.user.length < 1 &&
                    <NavItem path="/login" display="Login" />}
                </ul>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userSlice.fbId
})

export default connect(mapStateToProps)(NavContainer)
