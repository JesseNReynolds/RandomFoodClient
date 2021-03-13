import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFbId } from '../redux/userSlice'
import FacebookLogin from 'react-facebook-login'
import { BACK_END_URL } from '../globals'
import { Redirect } from 'react-router-dom'


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
    
    }

    render() {
        if (this.props.user.length > 0) {
            return <Redirect to='/random'/>
        } else {
        return (
            <>
                <br/>
                <br/>
                <br/>
                <div className='space-around-wrapper'>
                    <FacebookLogin
                        isMobile={false}
                        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                        autoLoad={false}
                        reAuthenticate={true}
                        callback={this.responseFacebook} />
                </div>
            </>
        )
        }
    }
}

const mapStateToProps = (state) => ({
    user: state.userSlice.fbId
})

export default connect(mapStateToProps)(Login)
