import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedbackPageFour extends Component{
    render(){
        return(
            <div>page four</div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackPageFour);