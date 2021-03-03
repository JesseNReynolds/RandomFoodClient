import React from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import RandomForm from './RandomForm';

class RandomContainer extends React.Component {

// access store to get length of results

    render() {
        return (
            <div>
                <RandomForm />
                <Filter />
            </div>
        )
    }


}

export default connect()(RandomContainer)