import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = { trainings: [] };
  }
  componentDidMount() {
    fetch("http://customerrest.herokuapp.com/gettrainings")
      .then(response => response.json())
      .then(jsondata => this.setState({ trainings: jsondata }))
      .catch(err => console.error(err));
  }
  render() {
    const columns = [
      { Header: "Date", accessor: "date" },
      { Header: "Duration in minutes", accessor: "duration" },
      { Header: "Activity", accessor: "activity" },
      { Header: "Customer ID", accessor: "customer.id" }
    ];

    return (
      <div>
        <ReactTable
          data={this.state.trainings}
          columns={columns}
          filterable={true}
        />
      </div>
    );
  }
}
