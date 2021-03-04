import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ChosenRestaurant extends Component {
    render() {
        return (
            <div>
                Test
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(ChosenRestaurant)
