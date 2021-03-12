import React from 'react';
import { connect } from 'react-redux';
import FilterCategories from './FilterCategories';
import RandomForm from './RandomForm';
import ChosenRestaurant from './ChosenRestaurant'
import LoadingSpinner from './LoadingSpinner';

class RandomContainer extends React.Component {

    constructor() {
        super ()
        this.state = {
            loading: false
        }
    }

    setLoading = (bool) => this.setState({loading: bool})

    render() {
        return (
            <div>
                <RandomForm setLoading={this.setLoading}/>
                {this.state.loading === true && 
                <LoadingSpinner />}
                {this.props.results.length > 0 &&
                <FilterCategories /> }
                {this.props.filters['submitted'] === true &&
                <ChosenRestaurant />}
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




export default connect(mapStateToProps)(RandomContainer)