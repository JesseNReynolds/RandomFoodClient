import React, { useState } from 'react'
import { BACK_END_URL } from '../../globals'
import Ratings from 'react-ratings-declarative'

function ChosenFromFavorites(props) {
    
    const [restaurant, setRestaurant] = useState({})
    const [loading, setLoading] = useState(true)
    const [fetchSent, setFetchSent] = useState(false)

    if (fetchSent === false) {
        
        setFetchSent(true)
        
        fetch(`${BACK_END_URL}/past_results/${props.favorite.id}`, {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
        method: 'get'
    })
        .then (apiResponse => apiResponse.json())
        .then (resp => setRestaurant(resp))
        .then (() => setLoading(false))
    }

    return (
        <>
        {loading === false &&
        <div className='form-container indent-children'>
            <h3 className='form-title'>{restaurant.name}! One of your favorites!</h3>
            <br/>
            <p>{restaurant.location.display_address[0]}</p>
            <p>{restaurant.location.display_address[1]}</p>
            <p>{restaurant.display_phone}</p>
            <h4 className='price'>{restaurant.price} / $$$$</h4>
            <div>
                {restaurant.categories.map((category) => {
                    return <p key={category['title']}>{category['title']}</p>
                })}
            </div>

            <h4>{restaurant.rating} stars in {restaurant.review_count} reviews on Yelp</h4>
            <div className='space-around-wrapper'>
                <Ratings
                rating={restaurant.rating}
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
            src={restaurant.image_url}
            alt={restaurant.name}/>
            <br />
        </div>
        }
        </>
    )
}

export default ChosenFromFavorites
