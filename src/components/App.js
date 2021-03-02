import React from 'react'
import NavContainer from './Nav/NavContainer'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Welcome from './Welcome'
import RandomForm from './RandomForm'
import Filter from './Filter'
import RandomContainer from './RandomContainer'

export default class App extends React.Component {
    logStore = () => {console.log(this.props.store)}
    render() {
        return(
            <div>
                <button onClick={this.logStore}>
                log
                </button>
                <NavContainer />
                <Router>
                    <Route exact path='/' component={Welcome}/>
                    <Route exact path='/random' component={RandomContainer}/>
                    {/* <Route exact path='/random/filter' component={Filter} /> */}
                </Router>
            </div>
        )
    }
}