import React from 'react';
import { connect } from 'react-redux';

class Filter extends React.Component {

    // access store to get results

    renderList = () => {
        return (<ul>
            {this.props.results.map(result => {
                return <li>test</li>
            }
            )}
        </ul>)
    }

    render() {

        return (
            <div>
                <ul>
                    {this.props.results.map(result => {
                    return <li>{result.name}</li>
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


export default connect(mapStateToProps)(Filter)