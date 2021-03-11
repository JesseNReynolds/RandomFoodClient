import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BACK_END_URL } from '../../globals'
import PastResultCard from './PastResultCard'

export class PastResults extends Component {

    constructor() {
        super()
        this.state = {
            pastResults: []
        }
    }
        
    componentDidMount() {
        fetch(`${BACK_END_URL}/users/${this.props.user}/past_results`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            method: 'get'
        })
            .then (apiResponse => apiResponse.json())
            .then (data => this.setState({pastResults: data}))
    }

    render() {
        return (
            <div>
                {this.state.pastResults.length > 0 &&
                this.state.pastResults.map(result => {
                    console.log(result)
                    return (
                    <PastResultCard name={result.restaurant_name}
                    time={result.created_at} 
                    />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userSlice.fbId

})

export default connect(mapStateToProps)(PastResults)
