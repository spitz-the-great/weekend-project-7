import React, { Component } from 'react';
import axios from 'axios';

class FeedbackList extends Component{

handleClick = () =>{

}

    render(){
        return(
            <tr>
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <td>{this.props.feedback.date}</td>
                <td>
                    <button onClick={this.handleClick}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default FeedbackList;