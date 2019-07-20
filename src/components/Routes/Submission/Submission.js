import React, { Component } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';

class Submission extends Component {

    nextPage = () => {
        this.props.history.push('/Feelings');
    }

    render() {
        return (
            <>
                <h2>Feedback!</h2>
                <br/>

                <h2>Thank You!</h2>

                <button onClick={this.nextPage}>Leave New Feedback</button>



            </>
        )
    }
}

export default Submission;
