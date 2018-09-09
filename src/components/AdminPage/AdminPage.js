import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import FeedbackList from '../FeedbackList/FeedbackList.js';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';


class AdminPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feedback: [],
        }
    }

    getFeedback() {

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
    }

    componentDidMount() {
        this.getFeedback();
    }


    handleClick = (feedbackId) => {
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


    

//     render() {
//         return (
//             <div>
//                 <h1>Admin Page</h1>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Feels</th>
//                             <th>Unners</th>
//                             <th>Sups</th>
//                             <th>Comms</th>
//                             <th>Date/Time</th>
//                             <th>Delete?</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.feedback.map((feedback, i) => {

//                             return (
//                                 <tr key={i}>
//                                     <td>{feedback.feeling}</td>
//                                     <td>{feedback.understanding}</td>
//                                     <td>{feedback.support}</td>
//                                     <td>{feedback.comments}</td>
//                                     <td>{feedback.date}</td>
//                                     <td>
//                                         <button onClick={() => { this.handleClick(feedback.id) }}>Delete

//                                         </button>
//                                     </td>
//                                 </tr>
//                             )
//                         })}

//                     </tbody>
//                 </table>
//                 </div>)}
// }


render(){
    return(

    <div>

                <Paper width='100%'
    marginTop="theme.spacing.unit * 3"
    overflowX='auto' >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell numeric>Feels</TableCell>
                                <TableCell numeric>Unners</TableCell>
                                <TableCell numeric>Sups</TableCell>
                                <TableCell>Comms</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Delete?</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.feedback.map((feedback, i) => {

                        return (
                            <TableRow key={i}>
                                <TableCell numeric>{feedback.feeling}</TableCell>
                                <TableCell numeric>{feedback.understanding}</TableCell>
                                <TableCell numeric>{feedback.support}</TableCell>
                                <TableCell numeric>{feedback.comments}</TableCell>
                                <TableCell numeric>{feedback.date}</TableCell>
                                <TableCell>
                                    <Button 
                                    variant="contained" 
                                    color="primary"
                                    onClick={() => { this.handleClick(feedback.id) }}>Delete
    
                                    </Button>      
                                     </TableCell>
                            </TableRow>
                         );
                         }
                         )}
                        </TableBody>
                    </Table>
                </Paper>

</div>);};}
  

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminPage);
