import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedbackPageThree extends Component{

    render(){
        return(
            <div>page three</div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackPageThree);