import React, { Component } from 'react';
import { connect } from 'react-redux';


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

        console.log(event.target.value);

        this.setState({

            feeling: event.target.value,
        });

        console.log(this.state.feeling);
    };


    clickHandler = (event) => {
        event.preventDefault();
        console.log(this.state);


        const action = {type:'ADD_FEELING', payload: this.state.feeling}
        console.log(action.payload)
        this.props.dispatch(action);

        
        this.props.history.push('2');
        console.log("reduxState: ", this.props.reduxState.feedbackList);

    }

    render() {
        return (
            <div>
                <p>page 1 of 4</p>
                <p>How are you feeling today?</p>
                <p>Enter a number from 0 to 5</p>
                <input required type="number" onChange={this.changeHandler} name="feedback" placeholder="i feel like a turd, etc."></input>
                <button onClick={this.clickHandler}>Next</button>
            </div>
        )
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackPageOne);
