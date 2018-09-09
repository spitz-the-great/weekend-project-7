import React, { Component } from 'react';


class SuccessPage extends Component {

    handleClick = () =>{
        this.props.history.push('/');
    }


    render() {

        return (
            <div>
                <h2>Thanks for that. I appreciate you.</h2>
                <button onClick={this.handleClick}>Leave New Feedback</button>
        </div>

        )
    }

}

export default SuccessPage;