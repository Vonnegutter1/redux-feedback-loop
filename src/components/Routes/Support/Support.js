import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = { support: 0 }

    handleChangeFor = (propertyName, event) => {
        this.setState({

            [propertyName]: event.target.value

        })
    }

    handleSubmit = (event) => {
        this.props.history.push('/comments')
        this.props.dispatch({
            type: `SET_SUPPORT`,
            payload: this.state
        })
    }

    render() {
        return (
            
            <div>
                <p>How well are you being supported?</p>
                <input type="radio" name="feedback" value="1"
                    onChange={(event) => this.handleChangeFor('support', event)} />1
                <br />
                <input type="radio" name="feedback" value="2"
                    onChange={(event) => this.handleChangeFor('support', event)} />2
                <br />
                <input type="radio" name="feedback" value="3"
                    onChange={(event) => this.handleChangeFor('support', event)} />3
                <br />
                <input type="radio" name="feedback" value="4"
                    onChange={(event) => this.handleChangeFor('support', event)} />4
                <br />
                <input type="radio" name="feedback" value="5"
                    onChange={(event) => this.handleChangeFor('support', event)} />5
                <br />
                <button onClick={this.handleSubmit}>Next</button>
            </div>
            
        )
    }

}


export default connect()(Support);
