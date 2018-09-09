import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class FeedbackPageThree extends Component {
    constructor(props) {
        super(props)

        this.state = {
            support: '',
        }

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event) {

        this.setState({
            support: event.target.value,
        });
    };


    clickHandler = (event) => {

        event.preventDefault();

        const action = { type: 'ADD_SUPPORT', payload: this.state.support }
        this.props.dispatch(action);

        this.props.history.push('4');
    }

    render() {
        return (
            <div>
                <p>page 3 of 4</p>
                <p>You feelin that good support?!</p>
                <p>Enter a number from 0 to 5</p>
                <input required type="number"onChange={this.changeHandler} name="support" placeholder="whatchyou need baby"></input>
                <Button variant="contained" color="primary" onClick={this.clickHandler}>Next</Button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackPageThree);