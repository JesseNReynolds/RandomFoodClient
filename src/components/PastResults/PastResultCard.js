import React, { Component } from 'react'

export class PastResultCard extends Component {

    render() {
        const matchDateArray = this.props.time.split('-')
        matchDateArray[2] = matchDateArray[2].split('T')[0]
        console.log(this)
        return (
            <div className='form-container'>
                <h1 className='form-title'>{this.props.name}</h1>
                <h3>Original Match: {matchDateArray[1]}/{matchDateArray[2]}/{matchDateArray[0]}</h3>
            </div>
        )
    }
}

export default PastResultCard
