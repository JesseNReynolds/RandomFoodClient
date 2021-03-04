import React from 'react';
import { connect } from 'react-redux';
import { setFilters } from '../../redux/filterSlice'

class FilterCategories extends React.Component {

    constructor() {
        super()
        this.state = {
            // this is so once the form is submitted, even if nothing is checked, there will be something
            // pushed to the store so that the conditional for the next component can see it.
            'submitted': false
        }
    }

    typesOfRestaurants = () => {
        const arrOfCategoryArrs = this.props.results.map( result => {
            return result.categories
        })

        const flattenedCategoriesObjsArr = arrOfCategoryArrs.flat()
        
        const arrOfCategories = flattenedCategoriesObjsArr.map( obj => {
            return obj.title
        })

        const arrOfUniqueCategories = [...new Set(arrOfCategories)]

        return arrOfUniqueCategories

    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.checked;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // set state, then after updated, dispatch
        this.setState({'submitted': true}, () => this.props.dispatch(setFilters(this.state)))
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.typesOfRestaurants().map((category, key) => {
                        return (
                            <div key={key}>
                                <label>
                                    {category}
                                </label>
                                <input
                                type='checkbox'
                                name={category}
                                checked={this.state[category] === undefined ? true
                                : this.state[category]}
                                onChange={this.handleChange}/>
                            </div>
                        )
                    })}
                    <input
                    type='submit'
                    value="Pick For Me"/>
                </form>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        results: state.resultSlice.results
    }
}


export default connect(mapStateToProps)(FilterCategories)