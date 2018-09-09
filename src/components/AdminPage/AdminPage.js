import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import FeedbackList from '../FeedbackList/FeedbackList.js';

class AdminPage extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            feedback: [],

        }
    }

    getFeedback() {
        console.log('in getFeedback');

        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            console.log('back from db with: ', response.data);
            this.setState({
                feedback: response.data
            });
        }).catch((error) => {
            console.log('error: ', error);
            alert('there was an error getting feedback from db');
        })

        console.log(this.state.feedback);
    }

    componentDidMount() {
        this.getFeedback();
    }


    handleClick = (feedbackId) => {
        console.log('in delete', feedbackId);

        axios({
            method: 'DELETE',
            url: `/feedback/${feedbackId}`
        }).then((response) => {
            this.getFeedback();
        }).catch((error) => {
            console.log('error making delete feedback request', error);
            alert('error deleting feedback');
        });
    };


    render() {
        return (
            <div>
                <h1>Admin Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Feels</th>
                            <th>Unners</th>
                            <th>Sups</th>
                            <th>Comms</th>
                            <th>Date/Time</th>
                            <th>Delete?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedback.map((feedback, i) => {

                            return(
                            <tr key={i}>
                            <td>{feedback.feeling}</td>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                            <td>{feedback.date}</td>
                            <td>
                                <button onClick={() =>{this.handleClick(feedback.id)}}>Delete</button>
                            </td>
                        </tr>
                            )})}



                            {/* return (
                                <FeedbackList getFeedback={this.props.getFeedback}
                                                key={i} 
                                                feedbackIn={feedbackIn}
                                                 />
                            );
                        }
                        )} */}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminPage);
