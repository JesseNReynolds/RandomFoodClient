import '../style.css'

import React from 'react'
import NavContainer from './Nav/NavContainer'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Welcome from './Welcome'
import Login from './Login'
import RandomContainer from './RandomFoodFinder/RandomContainer'
import PastResults from './PastResults/PastResults'

export default class App extends React.Component {
    logStore = () => {console.log(this.props.store)}
    render() {
        return(
            <Router>
                <NavContainer />
                <div className='content'>
                    <Route exact path='/' component={Welcome}/>
                    <Route exact path='/random' component={RandomContainer}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/history' component={PastResults}/>
                </div>
            </Router>
        )
    }
}