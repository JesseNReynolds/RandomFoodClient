import React from 'react';

export default class RandomForm extends React.Component {

    constructor() {
        super()
        this.state = {
            latitude: 0,
            longitude: 0,
            radius: 5,
            price: 3
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
            error => console.log(error),
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
        console.log(this)
      }

    render() {
        const distances = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
        return(
            <div>
                lat: {this.state.latitude}
                <br/>
                long: {this.state.longitude}

                <form>
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
                    <label>
                        {'Maximum Price'}
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
                </form>
            </div>
        )
    }

}