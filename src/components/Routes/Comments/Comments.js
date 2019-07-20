import React, { Component } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
import Review from '../Review/Review';

class Comments extends Component {

    nextPage = () => {
        this.props.history.push('/Review');
    }
  

    render() {
        return (
           <>
                <h2>Any comments you want to leave?</h2>
                <input type="text" placeholder="Enter Comments"></input>

                <button onClick={this.nextPage}>Next</button>
                <Review />
                
                </>
        ) 
    }
}

export default Comments;
