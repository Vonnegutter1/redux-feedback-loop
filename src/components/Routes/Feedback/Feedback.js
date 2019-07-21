import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feedback extends Component {

    state = {
        feelings: this.props.reduxStore.feelingsReducer.feelings,
        understanding: this.props.reduxStore.understandingReducer.understanding,
        support: this.props.reduxStore.supportReducer.support,
        comment: this.props.reduxStore.commentReducer.comment
    }

    handleSubmit = (event) => {
        console.log('Adding Feelings Feedback', this.state.feelings);

        this.props.history.push('/understanding')
    } // handle submit

    render() {
        return (
            <>
                <h2>Review your Feedback: </h2>
                <h3>Feelings: {this.props.reduxStore.feelingsReducer.feelings} </h3>
                <h3>Understanding: {this.props.reduxStore.understandingReducer.understanding}</h3>
                <h3>Support: {this.props.reduxStore.supportReducer.support} </h3>
                <h3>Comments: {this.props.reduxStore.commentReducer.comment}</h3>
            </>
        )
    }
}


const mapStateToProps = (reduxStore) => ({
    reduxStore
})


export default connect(mapStateToProps)(Feedback);