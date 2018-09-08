import React, { Component } from 'react';
import axios from 'axios';

class AdminPage extends Component{

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



    render(){
        return(
            <div>
                admin page
            </div>
        )
    }
}

export default AdminPage;