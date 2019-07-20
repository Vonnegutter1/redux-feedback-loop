import React, { Component } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
import Review from '../Review/Review';

class Understanding extends Component {

    nextPage = () => {
        this.props.history.push('/Supported');
    }


    render() {
        return (
            <>
            <form>
                <h2>How well are you understanding the content?</h2>
                <h4>Understanding?</h4>
                
                <input type="number" onChange={(event) => this.handleChangeFor('feeling', event)} />


                <button onClick={this.nextPage}>Next</button>
                <Review />
                </form>

            </>
        )
    }
}

export default Understanding;
