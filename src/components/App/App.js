import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';

//Routes Listed Below

import Comments from '../Routes/Comments/Comments';


// App Component with routes included below
class App extends Component {

  startSurvey = () => {
    console.log("started survey")
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          
        </header>
        <br/>
        <button onClick={(event) => this.startSurvery()}>Start Survey</button>
        <br/>
        <div>
        <Router>
          <Route path="/Comments" component={Comments} />
        </Router>
       
        </div>  
      </div>
    );
  }
}

export default App;
