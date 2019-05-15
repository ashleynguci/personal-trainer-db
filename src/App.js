import React, { Component } from "react";
import TrainingList from "./components/TrainingList";
import "./App.css";
import Navigator from "./Authentic/Navigator";
import CustomerList from "./components/CustomerList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TrainingCalendar from "./components/TrainingCalendar";
import Home from "./Authentic/Home";
import { AuthProvider } from "./Authentic/Auth";
import Login from "./Authentic/Login";
import SignUp from "./Authentic/SignUp";
import PrivateRoute from "./Authentic/PrivateRoute";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthProvider>
          <Router>
            <div>
              <Navigator />
              <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute
                  exact
                  path="/customerlist"
                  component={CustomerList}
                />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <PrivateRoute
                  exact
                  path="/trainings"
                  component={TrainingList}
                />
                <PrivateRoute
                  exact
                  path="/calendar"
                  component={TrainingCalendar}
                />
              </Switch>
            </div>
          </Router>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
