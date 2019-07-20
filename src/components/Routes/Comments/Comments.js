import React, { Component } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
import Review from '../Review/Review';

class Comments extends Component {

  

    render() {
        return (
           <>
                <h2>Any comments you want to leave?</h2>
                <input type="text" placeholder="Enter Comments"></input>
                
                <button onClick={(event) => this.captureSupported()}>Next</button>
                <Review />
                
                </>
        ) 
    }
}

export default Comments;
