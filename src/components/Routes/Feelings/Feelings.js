import React, { Component } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
import Review from '../Review/Review';


class Feelings extends Component {

state = {

}

nextPage = () => {
    this.props.history.push('/understanding');
}

    render() {
        return (
            <>
                <h2>How are you feeling today?</h2>

                <h4>Feeling?</h4>
                <input type="number"></input>


                <button onClick={this.nextPage}>Next</button>
                <Review />
                </>

        )
    }
}

export default Feelings;
