import React from 'react';
import { connect } from 'react-redux';
import FilterCategories from './FilterCategories';
import RandomForm from './RandomForm';
import ChosenRestaurant from './ChosenRestaurant'

class RandomContainer extends React.Component {


    render() {
        return (
            <div>
                <RandomForm />
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