import React, { Component } from 'react'
import positive from '../../images/positive.png'
import neutral from '../../images/neutral.png'
import negative from '../../images/negative.png'
import positiveEmpty from '../../images/positive-empty.png'
import neutralEmpty from '../../images/neutral-empty.png'
import negativeEmpty from '../../images/negative-empty.png'


export class PastResultCard extends Component {

    handleClick = (event) => {
        this.props.sendUpdate(this.props.id, event.target.alt)
    }

    render() {
        
        const matchDateArray = this.props.time.split('-')
        matchDateArray[2] = matchDateArray[2].split('T')[0]

        return (
            <div className='form-container'>
                <h1 className='form-title'>{this.props.name}</h1>
                <h3 className='center-text'>Original Match: {matchDateArray[1]}/{matchDateArray[2]}/{matchDateArray[0]}</h3>
                <div className='space-around-wrapper'>
                    {this.props.rating === 'negative' && <img className='emoji-rating' src={negative} alt="negative" />}
                    {this.props.rating !== 'negative' && <img className='emoji-rating' src={negativeEmpty} alt="negative" onClick={this.handleClick}/>}
                    {this.props.rating === 'neutral' && <img className='emoji-rating' src={neutral} alt="neutral" />}
                    {this.props.rating !== 'neutral' && <img className='emoji-rating' src={neutralEmpty} alt="neutral" onClick={this.handleClick}/>}
                    {this.props.rating === 'positive' && <img className='emoji-rating' src={positive} alt="positive" />}
                    {this.props.rating !== 'positive' && <img className='emoji-rating' src={positiveEmpty} alt="positive" onClick={this.handleClick}/>}
                </div>
            </div>
        )
    }
}

export default PastResultCard
