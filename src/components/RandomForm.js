import React from 'react';

export default class RandomForm extends React.Component {

    constructor() {
        super()
        this.state = {
            latitude: 0,
            longitude: 0
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

    render() {
        return(
            <div>
                lat: {this.state.latitude}
                <br/>
                long: {this.state.longitude}
            </div>
        )
    }

}