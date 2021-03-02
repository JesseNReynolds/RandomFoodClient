import React from 'react';
import { connect } from 'react-redux';
import { selectResults } from '../redux/resultsSlice'

class RandomContainer extends React.Component {

// in order to move away from routing the individual aspects of the random-food-getting
// I wish to put the components for that functionality here and conditionally render them


    // testFunc = () => {
    //     console.log(this.props.store)
    // }

    render() {
        return (
            <div>
                {/* <button onClick={this.testFunc}></button> */}
            </div>
        )
    }


}

export default connect()(RandomContainer)