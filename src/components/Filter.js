import React from 'react';
import { connect } from 'react-redux';

class Filter extends React.Component {

    // access store to get results
    render() {
        return (
            <div>
                <button onClick={() => console.log(this)}>filter</button>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}


export default connect(mapStateToProps)(Filter)