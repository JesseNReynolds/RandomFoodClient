import React from 'react'
import NavContainer from './Nav/NavContainer'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Welcome from './Welcome'
import RandomForm from './RandomForm'

export default class App extends React.Component {
    render() {
        return(
            <div>
                <NavContainer />
                <Router>
                    <Route exact path='/' component={Welcome}/>
                    <Route exact path ='/random' component={RandomForm}/>
                </Router>
            </div>
        )
    }
}