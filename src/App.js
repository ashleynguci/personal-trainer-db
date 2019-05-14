import React, { Component } from "react";
import TrainingList from "./components/TrainingList";
import "./App.css";
import Navigator from "./components/Navigator";
import CustomerList from "./components/CustomerList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TrainingCalendar from "./components/TrainingCalendar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigator />
            <Switch>
              <Route exact path="/" component={CustomerList} />
              <Route exact path="/trainings" component={TrainingList} />
              <Route exact path="/calendar" component={TrainingCalendar} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
