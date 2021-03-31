import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


export class Welcome extends React.Component {

    render() {
        return (
            <div>
                <br/>
                <h3 className='center-text'>Hi, I'm RandomFood.</h3>
                <br/>
                <h3 className='center-text'>I help you pick where to eat.</h3>
                <br/>
                <h4 className='center-text'>To continue, I'll need access to your location.</h4>
                <br/>
                <p className='center-text'>I don't store your location, I just use it to help find a restaurant for you to go to.</p>
                <br/>
                <p className='center-text'>You can view our Privacy Policy <a href='https://github.com/JesseNReynolds/RandomFoodClient/blob/main/PrivacyPolicy.md'>here</a>.</p>
                <br/>
                <p className='center-text'>To store your results for later review, please log in.</p>
                <br/>
                <div className='space-around-wrapper'>
                    {this.props.user.length < 1 &&
                    <Link to='/login' className='btn'>Login</Link>}
                    <Link to='/random' className='btn'>Random</Link>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    user: state.userSlice.fbId
})

export default connect(mapStateToProps)(Welcome)

