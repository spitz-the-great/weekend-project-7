import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';



class FeedbackPageFour extends Component{
    constructor() {
        super()

        this.state = {
            comments: '',
        }

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event) {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({
            comments: event.target.value,
        });
        console.log(this.state.comments);
    };


    clickHandler = (event) => {

        console.log(this.state);
        event.preventDefault();

        const action = { type: 'ADD_COMMENTS', payload: this.state.comments }
        this.props.dispatch(action);

        console.log("reduxState: ", this.props.reduxState.feedbackList);

        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState.feedbackList
        }).then((response) => {
                console.log('back from post ', response.data);
            }).catch((error) => {
                console.log(error);
                alert('post to db DID NOT work')
            })
        this.props.history.push('5');
    }

    render() {
        return (
            <div>
                <p>page 4 of 4</p>
                <p>You tryna add a comment? Or nah?</p>
                <input onChange={this.changeHandler} name="comments" placeholder="let your words run wild"></input>
                <button onClick={this.clickHandler}>Next</button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackPageFour);