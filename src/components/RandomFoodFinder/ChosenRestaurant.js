import React, { Component } from 'react'
import { connect } from 'react-redux'
import Ratings from 'react-ratings-declarative'
import { BACK_END_URL } from '../../globals'

export class ChosenRestaurant extends Component {

    constructor(){
        super()
        this.state = {
            chosen: {}
        }
    }

    chooseRestaurant = () => {

        const filterArr = []

        for (const key in this.props.filters) {
            if(this.props.filters[key] === false) { 
                filterArr.push(key)
            }
        }   

        const eligibleRestaurants = this.props.results.filter(result => {
            let returnBool = true

            const categoryArr = result.categories.map(categoryObj => {
                return categoryObj['title']
            })

            categoryArr.forEach(category => {
                if (filterArr.includes(category)) {
                    returnBool = false
                }
            });
            
            return returnBool
        })

        return eligibleRestaurants[Math.floor(Math.random() * eligibleRestaurants.length)]

    }


    // componentWillMount is deprecated. Recommendations include refactoring the
    // whole component to a functional one.
    UNSAFE_componentWillMount() {
        this.setState({chosen: this.chooseRestaurant()})   
    }

    handleReroll = () => {
        this.setState({chosen: this.chooseRestaurant()})
    }

    handleAccept = () => {
        fetch(`${BACK_END_URL}/past_results`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            method: 'post',
            body: JSON.stringify({past_result: {user_id: this.props.user, yelp_id: this.state.chosen.id, restaurant_name: this.state.chosen.name}})
        })
            .then (apiResponse => apiResponse.json())
            .then (data => console.log(data))

    }

    render() {
        return (
            <div>
                <h1>{this.state.chosen.name}</h1>
                <h3>{this.state.chosen.location.display_address[0]}, {this.state.chosen.location.display_address[1]}</h3>
                <h3>{this.state.chosen.display_phone}</h3>
                
                <div>
                    {this.state.chosen.categories.map((category) => {
                        return <h3>{category['title']}</h3>
                    })}
                </div>

                <h4>{this.state.chosen.rating} stars in {this.state.chosen.review_count} reviews on Yelp</h4>
                <Ratings
                rating={this.state.chosen.rating}        widgetDimensions="1.25em"
                widgetSpacings="15px"
                widgetRatedColors="#759FBC">
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                </Ratings>
                <br/>
                <img
                src={this.state.chosen.image_url}
                alt={this.state.chosen.name}/>

                <br />
                <button
                onClick={this.handleReroll}>
                    No thanks!
                </button>
                <button 
                onClick={this.handleAccept}>
                    OK!
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.resultSlice.results,
        filters: state.filterSlice.filters,
        user: state.userSlice.fbId
    }    
}

export default connect(mapStateToProps)(ChosenRestaurant)
