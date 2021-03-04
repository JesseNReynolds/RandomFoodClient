import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ChosenRestaurant extends Component {

    constructor(){
        super()
        this.state = {chosen: this.chooseRestaurant}
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


    componentWillMount() {
        this.setState({chosen: this.chooseRestaurant()})   
    }

    render() {
        return (
            <div>
                {this.state.chosen.name}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.resultSlice.results,
        filters: state.filterSlice.filters
    }    
}

export default connect(mapStateToProps)(ChosenRestaurant)
