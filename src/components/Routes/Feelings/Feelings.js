import React, { Component } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
import Review from '../Review/Review';
import {connect} from 'react-redux';


class Feelings extends Component {

state = {
    newFeeling: {
        feeling: ''
    }
}

nextPage = (event) => {
    event.preventDefault();

    this.props.dispatch({type: 'UPDATE_FEELINGS', payload: this.state.newFeeling})

    this.props.history.push('/understanding');
}

handleChangeFor = (propsName, event) => {
    this.setState({
        newFeeling: {
            ...this.state.newFeeling,
            [propsName]: event.target.value
        }
    })
}


    render() {
        return (
            <>
                <h2>How are you feeling today?</h2>

                <h4>Feeling?</h4>
                <form>
                    <input type="number" onChange={(event) =>this.handleChangeFor('feeling', event)} />
            
                <button onClick={this.nextPage} type="submit">Next</button>
                <Review />
                </form>
                </>

        )
    }
}

export default connect()(Feelings);
