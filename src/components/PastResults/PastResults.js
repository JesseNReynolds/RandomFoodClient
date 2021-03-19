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

    sendUpdate = (id, rating) => {
        
        fetch(`${BACK_END_URL}/past_results/${id}`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            method: 'PATCH',
            body: JSON.stringify({past_result: {rating: rating}})
        })
            .then (apiResponse => apiResponse.json())
            .then (data => this.setState({pastResults: data}))
    }

    render() {
        return (
            <div>
                {this.state.pastResults.length < 1 &&
                <h2 className='center-text'>Once you use the Random feature, results you accept will be saved here. You'll then be able to review them.</h2>}
                {this.state.pastResults.length > 0 &&
                this.state.pastResults.sort((a, b) => (a.id > b.id ? 1 : -1)).map(result => {
                    return (
                        <PastResultCard 
                        name={result.restaurant_name}
                        time={result.created_at}
                        key={result.id}
                        id={result.id}
                        rating={result.rating}
                        sendUpdate ={this.sendUpdate}
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
