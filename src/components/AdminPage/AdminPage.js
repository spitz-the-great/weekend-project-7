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
                            return (
                                <FeedbackList key={i} feedback={feedback} />
                            );
                        }
                        )}
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
