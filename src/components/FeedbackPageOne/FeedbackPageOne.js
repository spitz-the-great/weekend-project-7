import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class FeedbackPageOne extends Component {

    constructor(props) {
        super(props)
        this.state = {
            feeling: '',
        }
        this.changeHandler = this.changeHandler.bind(this);
    }


    changeHandler(event) {
        event.preventDefault();
        this.setState({
            feeling: event.target.value,
        });
    };


    clickHandler = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_FEELING', payload: this.state.feeling }
        this.props.dispatch(action);
        this.props.history.push('2');
    }

    render() {
        return (
            <div>
                <p>page 1 of 4</p>
                <p>How are you feeling today?</p>
                <p>Enter a number from 0 to 5</p>
                <input required type="number" onChange={this.changeHandler} name="feedback" placeholder="i feel like a turd, etc."></input>
                <Button variant="contained" color="primary" onClick={this.clickHandler}>Next</Button>
            </div>
        )
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackPageOne);
