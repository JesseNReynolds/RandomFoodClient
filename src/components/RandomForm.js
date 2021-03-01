import React from 'react';
import { BACK_END_URL } from '../globals'

export default class RandomForm extends React.Component {

    constructor() {
        super()
        this.state = {
            latitude: 0,
            longitude: 0,
            radius: 5,
            price: 3,
            openBool: true
        }
    }

    componentDidMount() {
        const options = {
            enableHighAccuracy: true,
            timeout: 500,
            maximumAge: 0
        }

        navigator.geolocation.getCurrentPosition(
            success => this.setState({ latitude: success.coords.latitude, longitude: success.coords.longitude },
            error => () => console.log(error),
            options
            )
        );
    }

    // sourced from react.js.org/docs/forms
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        console.log(BACK_END_URL)
        fetch(`${BACK_END_URL}/query`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            method: 'post',
            body: JSON.stringify(this.state)
        })
            .then (response => response.json())
            .then (data => console.log(data))
    }

    render() {
        const distances = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
        return(
            <div>
                lat: {this.state.latitude}
                <br/>
                long: {this.state.longitude}

                <form onSubmit={this.handleSubmit}>
                    <label>
                        {'Search Radius: '} 
                    </label>
                    <select
                    name='radius'
                    value={this.state.radius}
                    onChange={this.handleChange}>
                        {distances.map((distance, index) => {
                            if (index === 0) {
                                return(
                                    <option value={distance}>
                                        {distance} mile
                                    </option>
                                )
                            } else {
                                return(
                                    <option value={distance}>
                                        {distance} miles
                                    </option>
                                )
                            }
                        })}
                    </select>
                    <br/>

                    <label>
                        {'Maximum Price: '}
                    </label>
                    <select
                    name='price'
                    value={this.state.price}
                    onChange={this.handleChange}>
                        <option value={1}>$</option>
                        <option value={2}>$$</option>
                        <option value={3}>$$$</option>
                        <option value={4}>$$$$</option>
                    </select>
                    <br/>

                    <label>
                        {'Only Show Restaurants Open Now'}
                    </label>
                    <input
                    type='checkbox'
                    name='openBool'
                    checked={this.state.openBool}
                    onChange={this.handleChange} />
                    <br/>
                    
                    <input
                    type='submit'
                    />

                </form>
            </div>
        )
    }

}