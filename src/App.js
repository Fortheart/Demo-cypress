import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header/header.component';
import InterestingText from './components/interesting-text/interesting-text.component';
import Homepage from './components/homepage/homepage.component';
import About from './components/about/about.component';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: true,
      coolText: false
    }
  }

  render() {



    return (

      <div className="App">

        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" component={About} />
          </Switch>

        </Router>




      </div>
    );
  }
}

export default App;
