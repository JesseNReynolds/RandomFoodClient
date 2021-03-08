import React from 'react'
import NavContainer from './Nav/NavContainer'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Welcome from './Welcome'
import Login from './Login'
import RandomContainer from './RandomFoodFinder/RandomContainer'

export default class App extends React.Component {
    logStore = () => {console.log(this.props.store)}
    render() {
        return(
            <div>
                <NavContainer />
                <Router>
                    <Route exact path='/' component={Welcome}/>
                    <Route exact path='/random' component={RandomContainer}/>
                    <Route exact path='/login' component={Login}/>
                </Router>
            </div>
        )
    }
}