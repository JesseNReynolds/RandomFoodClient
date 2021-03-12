import React from 'react'

function LoadingSpinner() {
    return (
        <div className='form-container'>
            <h3 className='form-title'>Loading (This might take a moment, sorry!)</h3>

            <div className='loading-div'>
                <div className='dot-nest'>
                    <span className='bouncy-boi-1'></span>
                    <span className='bouncy-boi-2'></span>
                    <span className='bouncy-boi-3'></span>
                </div>
            </div>
        </div>
    )
}

export default LoadingSpinner
