import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedbackPageThree extends Component{
    constructor(props) {
        super(props)

        this.state = {
            comment: '',
        }

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event) {
        // event.preventDefault();
        console.log(event.target.value);
        this.setState({
            comment: event.target.value,
        });
        console.log(this.state.comment);
    };


    clickHandler = (event) => {

        console.log(this.state);
        event.preventDefault();

        const action = { type: 'ADD_COMMENT', payload: this.state.comment }
        this.props.dispatch(action);

        this.props.history.push('4');
    }

    render() {
        return (
            <div>
                <p>page 3 of 4</p>
                <p>You tryna add a comment? Or nah?</p>
                <input onChange={this.changeHandler} name="comment" placeholder="let your words run wild"></input>
                <button onClick={this.clickHandler}>Next</button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackPageThree);