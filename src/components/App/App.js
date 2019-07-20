import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';

//Routes Listed Below

import Comments from '../Routes/Comments/Comments';
import Submission from '../Routes/Submission/Submission'; 
import Feelings from '../Routes/Feelings/Feelings';
import Understanding from '../Routes/Understanding/Understanding';
import Supported from '../Routes/Supported/Supported';


// App Component with routes included below
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          
        </header>
        <br/>
        {/* <button onClick={(event) => this.startSurvery()}>Start Survey</button> */}
        <br/>
        <div>
        <Router>
          <Route path="/Comments" component={Comments} />
          <Route path="/Submission" component={Submission} />
          <Route path="/Feelings" component={Feelings} />
          <Route path="/Understanding" component={Understanding} />
          <Route path="/Supported" component={Supported} />
            
   
        </Router>
       
        </div>  
      </div>
    );
  }
}

export default App;
