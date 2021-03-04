import React from 'react';
import { connect } from 'react-redux';

class FilterCategories extends React.Component {

    constructor() {
        super()
        this.state = {}
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

    render() {

        return (
            <div>
                <form>
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