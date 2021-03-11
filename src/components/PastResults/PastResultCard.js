import React, { Component } from 'react'
import positive from '../../images/positive.png'
import neutral from '../../images/neutral.png'
import negative from '../../images/negative.png'
import positiveEmpty from '../../images/positive-empty.png'
import neutralEmpty from '../../images/neutral-empty.png'
import negativeEmpty from '../../images/negative-empty.png'


export class PastResultCard extends Component {

    handleClick = (event) => {
        console.log(event)
    }

    render() {
        
        const matchDateArray = this.props.time.split('-')
        matchDateArray[2] = matchDateArray[2].split('T')[0]

        return (
            <div className='form-container'>
                <h1 className='form-title'>{this.props.name}</h1>
                <h3 className='center-text'>Original Match: {matchDateArray[1]}/{matchDateArray[2]}/{matchDateArray[0]}</h3>
                <div className='space-around-wrapper'>
                    {this.rating === 'negative' && <img src={negative} alt="Negative" onClick={this.handleClick}/>}
                    {this.rating != 'negative' && <img src={negativeEmpty} alt="Negative" onClick={this.handleClick}/>}
                    {this.rating === 'neutral' && <img src={neutral} alt="Neutral" onClick={this.handleClick}/>}
                    {this.rating != 'neutral' && <img src={neutralEmpty} alt="Neutral" onClick={this.handleClick}/>}
                    {this.rating === 'positive' && <img src={positive} alt="Positive" onClick={this.handleClick}/>}
                    {this.rating != 'positive' && <img src={positiveEmpty} alt="Positive" onClick={this.handleClick}/>}
                </div>
            </div>
        )
    }
}

export default PastResultCard
