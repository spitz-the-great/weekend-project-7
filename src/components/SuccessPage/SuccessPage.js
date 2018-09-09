import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class SuccessPage extends Component {

    handleClick = () =>{
        this.props.history.push('/');
    }


    render() {

        return (
            <div>
                <h2>Thanks for that. I appreciate you.</h2>
                <Button  variant="contained" color="primary" onClick={this.handleClick}>Leave New Feedback</Button>
        </div>

        )
    }

}

export default SuccessPage;