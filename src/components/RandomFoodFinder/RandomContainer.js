import React from 'react';
import { connect } from 'react-redux';
import FilterCategories from './FilterCategories';
import RandomForm from './RandomForm';

class RandomContainer extends React.Component {


    render() {
        return (
            <div>
                <RandomForm />
                {this.props.results.length > 0 &&
                <FilterCategories /> }
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        results: state.resultSlice.results
    }    
}




export default connect(mapStateToProps)(RandomContainer)