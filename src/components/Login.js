import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setFbId } from '../redux/userSlice'
import FacebookLogin from 'react-facebook-login'

export class Login extends Component {
    responseFacebook = (response) => {
        this.props.dispatch(setFbId(response.id))
      }

    render() {
        return (
            <div>
                <FacebookLogin
                    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                    autoLoad={true}
                    reAuthenticate={true}
                    callback={this.responseFacebook} />
            </div>
        )
    }
}


export default connect()(Login)
