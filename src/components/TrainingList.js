import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Moment from "react-moment";
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
      {
        Header: "Date",
        accessor: "date",
        Cell: row => {
          return <Moment format="DD/MM/YYYY">{row.value}</Moment>;
        }
      },
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
