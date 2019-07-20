import React, { Component } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
import Review from '../Review/Review';

class Supported extends Component {

    nextPage = () => {
        this.props.history.push('/Comments');
    }

    render() {
        return (
            <>
                <h2>How well are you being supported?</h2>
                <h4>Supported?</h4>
                

                <input type="number"></input>


                <button onClick={this.nextPage}>Next</button>
                <Review />


            </>
        )
    }
}

export default Supported;
