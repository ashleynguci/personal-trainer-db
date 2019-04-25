import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = { customers: [] };
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
    fetch(customerLink.original.links[0].href, { method: "DELETE" })
      .then(this.loadCustomers())

      .catch(err => console.error(err));
    console.log(customerLink.original.links[0].href);
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
        Cell: value => (
          <button onClick={() => this.deleteCustomer(value)}>Delete</button>
        )
      }
    ];
    return (
      <div>
        <ReactTable
          data={this.state.customers}
          columns={columns}
          filterable={true}
        />
      </div>
    );
  }
}
