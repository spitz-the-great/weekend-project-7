import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedbackPageTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            understanding: '',
        }

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event) {
        // event.preventDefault();
        console.log(event.target.value);
        this.setState({
            understanding: event.target.value,
        });
        console.log(this.state.understanding);
    };


    clickHandler = (event) => {

        console.log(this.state);
        event.preventDefault();

        const action = {type:'ADD_UNDERSTANDING', payload: this.state.understanding}
        this.props.dispatch(action);

        this.props.history.push('3');
        console.log("reduxState: ", this.props.reduxState.feedbackList);
    }

    render() {
        return (
            <div>
                <p>page 2 of 4</p>
                <p>How are you understanding the presented items on this day?</p>
                <p>Enter a number from 0 to 5</p>
                <input required type="number" onChange={this.changeHandler} name="understanding" placeholder="understanding is the key to, you know, whatever"></input>
                <button onClick={this.clickHandler}>Next</button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackPageTwo);