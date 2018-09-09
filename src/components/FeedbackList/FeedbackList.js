import React, { Component } from 'react';
import axios from 'axios';
 //import DeleteButton from '../DeleteButton/DeleteButton.js';

class FeedbackList extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        
        this.state = {
            id: '',
        }

    }


    handleClick = (feedbackId, event) => {
        console.log('in delete, passed id: ', feedbackId)

        axios({
            method: 'DELETE',
            url: `/feedback/${feedbackId}`
        }).then((response) => {
            this.props.history.push('admin');
          //  this.props.getFeedback();  -- couldnt get this to work
          // going to put on adminpage to force new get for now
        }).catch((error) => {
            console.log('error making delete feedback request', error);
            alert('error deleting feedback');
        });
    };


    // onClick={this.handleClick()}

    render() {
        return (
            <tr>
                <td>{this.props.feedbackIn.feeling}</td>
                <td>{this.props.feedbackIn.understanding}</td>
                <td>{this.props.feedbackIn.support}</td>
                <td>{this.props.feedbackIn.comments}</td>
                <td>{this.props.feedbackIn.date}</td>
                <td>
                    <button onClick={() =>{this.handleClick(this.props.feedbackIn.id)}}>Delete</button>
                </td>
            </tr>
        )
    }
}

//<DeleteButton feedBackId={this.props.feedback.id} />

export default FeedbackList;