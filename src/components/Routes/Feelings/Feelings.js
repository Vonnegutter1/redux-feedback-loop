import React, { Component } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
import Review from '../Review/Review';


class Feelings extends Component {

captureFeelings = () => {
    console.log('capture feelings')
}

state = {

}

    render() {
        return (
            <>
                <h1>How are you feeling today?</h1>

                <h4>Feeling?</h4>
                <input type="number"></input>


                <button onClick={(event) => this.captureFeelings()}>Next</button>
                <Review />
                </>

        )
    }
}

export default Feelings;
