import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Moment from "react-moment";
import Button from "@material-ui/core/Button";
import firebaseConfig from "../firebase";
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = { trainings: [] };
  }
  componentDidMount() {
    this.loadTrainings();
  }

  loadTrainings = () => {
    fetch("https://customerrest.herokuapp.com/gettrainings")
      .then(response => response.json())
      .then(jsondata => this.setState({ trainings: jsondata }))
      .catch(err => console.error(err));
  };

  deleteTraining = value => {
    if (window.confirm("Are you sure?")) {
      fetch("https://customerrest.herokuapp.com/api/trainings/" + value, {
        method: "DELETE"
      })
        .then(res => this.setState({ open: true, message: "Training deleted" }))
        .then(res => this.loadTrainings())
        .catch(err => console.error(err));
    }
  };

  render() {
    const columns = [
      {
        Header: "Schedule",
        accessor: "date",
        Cell: row => {
          return <Moment format="DD.MM.YYYY - HH:MM">{row.value}</Moment>;
        }
      },
      { Header: "Duration in minutes", accessor: "duration" },
      { Header: "Activity", accessor: "activity" },
      {
        Header: "Customer",
        accessor: "customer",
        Cell: ({ value }) => {
          return (
            <div>
              <span className="firstName">{value.firstname} </span>
              <span className="lastName">{value.lastname}</span>
            </div>
          );
        }
      },
      {
        Header: "",
        filterable: false,
        sortable: false,
        width: 100,
        accessor: "id",
        Cell: ({ value }) => (
          <Button color="secondary" onClick={() => this.deleteTraining(value)}>
            Delete
          </Button>
        )
      }
    ];

    return (
      <div>
        <Button
          color="secondary"
          onClick={() => firebaseConfig.auth().signOut()}
        >
          Sign out
        </Button>
        <ReactTable
          data={this.state.trainings}
          columns={columns}
          filterable={true}
        />
      </div>
    );
  }
}
