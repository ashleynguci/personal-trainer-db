import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = { customers: [] };
  }
  componentDidMount() {
    fetch("https://customerrest.herokuapp.com/api/customers")
      .then(response => response.json())
      .then(jsondata => this.setState({ customers: jsondata.content }))
      .catch(err => console.error(err));
  }
  getIdNumber(link) {
    return link.replace(/[\D]/g, "");
  }
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
      { Header: "Phone", accessor: "phone" }
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
