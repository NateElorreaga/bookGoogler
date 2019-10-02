import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Container } from './components/Container';
import { Card } from './components/Card';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
    
      <div>
      <Navbar/>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Container} />
        </Switch>
        </Router> */}
      </div>
        <Container>
          <Card/>
        </Container>
    
      </div>
    );
  }
}

export default App;
