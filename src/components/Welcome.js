import React from 'react';
import { Link } from 'react-router-dom'

export default class Welcome extends React.Component {

    render() {
        return (
            <div>
                <h3>Hi, I'm RandomFood.</h3>
                <h3>I help you pick where to eat.</h3>
                <h4>To continue, I'll need access to your location, but don't worry, I don't store this information, I just use it to help find a restaurant for you to go to.</h4>
                <Link to='/random'>Let's go!</Link>
            </div>
        )
    }

}

