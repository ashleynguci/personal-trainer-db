import React, { Component } from "react";
import TrainingList from "./components/TrainingList";
import "./App.css";
import CustomerList from "./components/CustomerList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Customer database</h2>
        </header>
        <TrainingList />
        <CustomerList />
      </div>
    );
  }
}

export default App;
