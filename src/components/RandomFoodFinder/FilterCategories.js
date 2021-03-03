import React from 'react';
import { connect } from 'react-redux';

class FilterCategories extends React.Component {

    typesOfRestaurants = () => {
        const arrOfCategoriesArrs = this.props.results.map( result => {
            return result.categories
        })

        const flattenedCategoriesObjsArr = arrOfCategoriesArrs.flat()
        
        const arrOfCategories = flattenedCategoriesObjsArr.map( obj => {
            return obj.title
        })

        const arrOfUniqueCategories = [...new Set(arrOfCategories)]
        
        return arrOfUniqueCategories
    }

    render() {

        return (
            <div>
                
                <ul>
                    {this.typesOfRestaurants().map(category => {
                    return <li>{category}</li>
                    }
                    )}
                </ul>
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