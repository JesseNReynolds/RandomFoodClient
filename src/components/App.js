import '../style.css'

import React from 'react'
import NavContainer from './Nav/NavContainer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
                    <Switch>
                        <Route exact path='/'>
                            <Welcome/>
                        </Route>
                        <Route exact path='/RandomFoodClient'>
                            <Welcome/>
                        </Route>
                        <Route path='/random'>
                            <RandomContainer/>
                        </Route>
                        <Route path='/login'>
                            <Login />
                        </Route>
                        <Route path='/history'>
                            <PastResults />
                        </Route>
                    </Switch>
                </div>

            </Router>
        )
    }
}