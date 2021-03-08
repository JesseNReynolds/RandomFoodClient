import React, { Component } from 'react'
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login'

export class Login extends Component {
    responseFacebook = (response) => {
        console.log(response);
      }

    render() {
        return (
            <div>
                <FacebookLogin
                    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                    autoLoad={true}
                    callback={this.responseFacebook} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(Login)
