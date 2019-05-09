import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Button from "@material-ui/core/Button";
import AddCustomer from "./AddCustomer";
import { Snackbar } from "@material-ui/core";
import EditCustomer from "./EditCustomer";
import AddTraining from "./AddTraining";
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = { customers: [], message: "" };
  }
  componentDidMount() {
    this.loadCustomers();
  }
  loadCustomers = () => {
    fetch("https://customerrest.herokuapp.com/api/customers")
      .then(response => response.json())
      .then(jsondata => this.setState({ customers: jsondata.content }))
      .catch(err => console.error(err));
  };

  deleteCustomer = customerLink => {
    if (window.confirm("Are you sure?")) {
      fetch(customerLink.original.links[0].href, { method: "DELETE" })
        .then(res => this.loadCustomers())
        .then(res => this.setState({ open: true, message: "Customer deleted" }))
        .catch(err => console.error(err));
    }
    // fetch(customerLink.original.links[0].href, { method: "DELETE" })
    //   .then(this.loadCustomers())

    //   .catch(err => console.error(err));
    // console.log(customerLink.original.links[0].href);
  };
  saveCustomer = customer => {
    fetch("https://customerrest.herokuapp.com/api/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customer)
    })
      .then(res => this.loadCustomers())
      .then(res => this.setState({ open: true, message: "Added new customer" }))
      .catch(err => console.error(err));
  };
  saveTraining = training => {
    fetch("https://customerrest.herokuapp.com/api/trainings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(training)
    })
      .then(res => this.setState({ open: true, message: "Added new training" }))
      .catch(err => console.error(err));
  };
  updateCustomer = (link, updatedCustomer) => {
    fetch(link, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedCustomer)
    })
      .then(res => this.loadCustomers())
      .then(res =>
        this.setState({ open: true, message: "Updated new customer" })
      )
      .catch(err => console.error(err));
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const columns = [
      {
        Header: "ID number",
        accessor: "links[0].href",
        Cell: row => {
          return row.value.replace(/[\D]/g, "");
        }
      },
      { Header: "Firstname", accessor: "firstname" },
      { Header: "Lastname", accessor: "lastname" },
      { Header: "Address", accessor: "streetaddress" },
      { Header: "Postcode", accessor: "postcode" },
      { Header: "City", accessor: "city" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
      {
        Header: "",
        accessor: "links[0].href",
        filterable: "false",
        sortable: "false",
        width: 100,
        Cell: ({ value, row }) => (
          <EditCustomer
            updateCustomer={this.updateCustomer}
            link={value}
            customer={row}
          />
        )
      },
      {
        Header: "",
        accessor: "links[0].href",
        filterable: "false",
        sortable: "false",
        width: 100,
        Cell: ({ value, row }) => (
          <AddTraining
            saveTraining={this.saveTraining}
            link={value}
            customer={row}
          />
        )
      },
      {
        Header: "",
        accessor: "links[0].href",
        Cell: value => (
          <Button color="secondary" onClick={() => this.deleteCustomer(value)}>
            Delete
          </Button>
        )
      }
    ];
    return (
      <div>
        <AddCustomer saveCustomer={this.saveCustomer} />
        <ReactTable
          data={this.state.customers}
          columns={columns}
          filterable={true}
        />
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={this.state.message}
        />
      </div>
    );
  }
}
