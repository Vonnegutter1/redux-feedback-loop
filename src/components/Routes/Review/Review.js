import React, { Component } from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';

class Review extends Component {

    render() {
        return (
            <>
                <h2>Review Your Feedback</h2>
                <section>

                <form>
                    <div>
                <p>Feelings: </p>
                <p>Understanding: </p>
                <p>Support: </p>
                <p>Comments: </p>
                        </div>
                </form>
                    
                    {/* {this.props.reduxStore.feedbackReducer.map(item =>{
                        return(<ul><key={item.id}> 
                        <li>Feelings: {item.feelings}</li>
                        </ul>)
                    )} */}
                </section>
                
                {/* <button>INCOMPLETE</button> */}

               
            </>

        )
    }
}

export default Review;
