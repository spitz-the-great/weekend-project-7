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

        this.setState({
            understanding: event.target.value,
        });
    };


    clickHandler = (event) => {
        event.preventDefault();
        const action = {type:'ADD_UNDERSTANDING', payload: this.state.understanding}
        this.props.dispatch(action);

        this.props.history.push('3');
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