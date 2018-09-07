import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class FeedbackPageOne extends Component {
constructor(props){
    super(props)

    this.state = {
        feedback: {}
    }
}
    getFeedback() {
        console.log('in getFeedback');

        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            console.log('back from db with: ', response.data);
            this.setState({
                feedback: response.data
            });
        }).catch((error) => {
            console.log('error: ', error);
            alert('there was an error getting feedback from db');
        })

        console.log(this.state.feedback);
    }
componentDidMount(){
    this.getFeedback();
}


    render() {
        return (
            <div>page one</div>
        )
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackPageOne);
