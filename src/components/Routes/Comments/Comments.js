import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        comment: ''
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({

            [propertyName]: event.target.value

        })
    }

    handleSubmit = (event) => {
        this.props.history.push('/review')
        this.props.dispatch({
            type: `SET_COMMENT`,
            payload: this.state
        })
    }

    render() {
        return (
            <div>
                <p>Any comments you want to leave?</p>
                <p>Comments? </p>
                <input required type="text" size="35" placeholder="Please enter a comment"
                    onChange={(event) => this.handleChangeFor('comment', event)}></input>
                <button onClick={this.handleSubmit}>Submit comment</button>
            </div>
        )
    }

}




export default connect()(Comments);