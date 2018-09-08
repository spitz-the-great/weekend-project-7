import React, { Component } from 'react';

import { connect } from 'react-redux';

class FeedbackPageThree extends Component {
    constructor(props) {
        super(props)

        this.state = {
            support: '',
        }

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event) {
        // event.preventDefault();
        console.log(event.target.value);
        this.setState({
            support: event.target.value,
        });
        console.log(this.state.support);
    };


    clickHandler = (event) => {

        console.log(this.state);
        event.preventDefault();

        const action = { type: 'ADD_SUPPORT', payload: this.state.support }
        this.props.dispatch(action);

        this.props.history.push('4');
        console.log("reduxState: ", this.props.reduxState.feedbackList);

    }

    render() {
        return (
            <div>
                <p>page 3 of 4</p>
                <p>You feelin that good support?!</p>
                <p>Enter a number from 0 to 5</p>
                <input required type="number"onChange={this.changeHandler} name="support" placeholder="whatchyou need baby"></input>
                <button onClick={this.clickHandler}>Next</button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackPageThree);