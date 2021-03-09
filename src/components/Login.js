import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFbId } from '../redux/userSlice'
import FacebookLogin from 'react-facebook-login'
import { BACK_END_URL } from '../globals'

export class Login extends Component {
    
    responseFacebook = (response) => {
        this.props.dispatch(setFbId(response.id))
        
        fetch(`${BACK_END_URL}/users`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            method: 'post',
            body: JSON.stringify({user: {fb_id: response.id}})
        })
            .then (apiResponse => apiResponse.json())
            .then (data => console.log(data))
        
    }

    render() {
        return (
            <div>
                <FacebookLogin
                    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                    autoLoad={false}
                    reAuthenticate={true}
                    callback={this.responseFacebook} />
            </div>
        )
    }
}


export default connect()(Login)
