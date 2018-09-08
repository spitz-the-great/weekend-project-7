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
        // event.preventDefault();

        console.log(event.target.value);


        this.setState({

            feeling: event.target.value,
        });

        console.log(this.state.feeling);
    };


    clickHandler = (event) => {

           console.log(this.state);
           event.preventDefault();

           const action = { type: 'ADD_FEELING', payload: this.state.feeling}
           this.props.dispatch(action);

           this.props.history.push('2');
           
        }

    render() {
        return (
            <div>
                <p>page 1 of 4</p>
                <p>How are you feeling today?</p>
                <input onChange={this.changeHandler} name="feedback" placeholder="i feel like a turd, etc."></input>
                <button onClick={this.clickHandler}>Next</button>
            </div>
        )
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FeedbackPageOne);
