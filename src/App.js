import React, { Component } from "react";

import "./App.css";
import CustomerList from "./components/CustomerList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Customer database</h2>
        </header>
        <CustomerList />
      </div>
    );
  }
}

export default App;
