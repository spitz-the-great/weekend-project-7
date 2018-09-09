import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



class FeedbackPageFour extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ...this.props.reduxState.feedbackList, comments: '',
        }

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event) {
        event.preventDefault();
        this.setState({
            comments: event.target.value,
        });

        const action = { type: 'ADD_COMMENTS', payload: this.state.comments }
        this.props.dispatch(action);
    };


    clickHandler = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.state
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
                <h2>Page 4 of 4</h2>
                <p>You tryna add a comment? Or nah?</p>
                <input onChange={this.changeHandler} name="comments" placeholder="let your words run wild"></input>
                <br/>
                <br/>
                <Button variant="contained" color="primary" onClick={this.clickHandler}>Submit</Button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackPageFour);