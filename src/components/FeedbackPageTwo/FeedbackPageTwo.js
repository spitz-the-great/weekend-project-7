import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedbackPageTwo extends Component{


    render(){
        return(
            <div>page one</div>
        )
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackPageTwo);