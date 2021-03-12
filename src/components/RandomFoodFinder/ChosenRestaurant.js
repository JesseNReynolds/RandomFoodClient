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

    }

    render() {
        return (
            <div className='form-container indent-children'>
                <h3 className='form-title'>How about {this.state.chosen.name}?</h3>
                <br/>
                <p>{this.state.chosen.location.display_address[0]}</p>
                <p>{this.state.chosen.location.display_address[1]}</p>
                <p>{this.state.chosen.display_phone}</p>
                <h4 className='price'>{this.state.chosen.price} / $$$$</h4>
                <div>
                    {this.state.chosen.categories.map((category) => {
                        return <p key={category['title']}>{category['title']}</p>
                    })}
                </div>

                <h4>{this.state.chosen.rating} stars in {this.state.chosen.review_count} reviews on Yelp</h4>
                <div className='space-around-wrapper'>
                    <Ratings
                    rating={this.state.chosen.rating}
                    widgetDimensions="2em"
                    widgetSpacings="15px"
                    widgetRatedColors="#759FBC">
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                    </Ratings>
                </div>
                <br/>
                <img
                className='chosen-restaurant-image'
                src={this.state.chosen.image_url}
                alt={this.state.chosen.name}/>

                <br />
                <div className='space-around-wrapper'>
                    <button
                    className='btn-small'
                    onClick={this.handleReroll}>
                        No thanks! (Try again)
                    </button>
                    { this.props.user.length > 0 &&
                    <button
                    className='btn-small' 
                    onClick={this.handleAccept}>
                        OK! (Save)
                    </button>}
                </div>
                { this.props.user.length > 0 &&
                    <>
                    <h5 className='center-text'>Clicking OK will save this result to your Past Results, allowing you to rate it later.</h5>
                    <h5 className='center-text'>In the future I will be able to exclude Past Results you didn't like, or select exclusively from ones you have liked!</h5>
                    </>}
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
