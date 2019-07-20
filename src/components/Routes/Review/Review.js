import React, { Component } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';


class Review extends Component {
    nextPage = () => {
        this.props.history.push('/submission');
    }

    render() {
        return (
            <>
                <h2>Review Your Feedback</h2>
                <section>
                    {this.props.reduxStore.feedbackReducer.map((item, i) => {
                        return( <ul key={i}>
                        <li>Feelings: {item.feelings}</li>
                        <li>Understanding: {item.understanding}</li>
                        <li>Support: {item.support}</li>
                        <li>Comments: {item.comments}</li>
                        <button>Incomplete</button>
                        </ul>)
                    })}
                
                    
                </section>
            
            </>

        )
    }
}

export default Review;
