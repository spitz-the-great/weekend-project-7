import React, { Component } from 'react';
import axios from 'axios';

class DeleteButton extends Component {

constructor(props){
    super(props)
    this.state = {
        id: '',
    }

}

    handleClick = (feedbackId) => {
        console.log('in delete', this.props.feedBackId);

        // axios({
        //     method: 'DELETE',
        //     url: `/feedback/${feedbackId}`
        // }).then((response) => {
        //     //this.props.getFeedback();
        // }).catch((error) => {
        //     console.log('error making delete feedback request', error);
        //     alert('error deleting feedback');
        // });
    };

    render() {
        return (
            <td>
                <button onClick={this.handleClick('test')}>Delete</button>
            </td>
        )
    }
}

export default DeleteButton;