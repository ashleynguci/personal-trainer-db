import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      id: "",
      firstname: "",
      lastname: "",
      address: "",
      postcode: "",

      city: "",
      email: "",
      phone: ""
    };
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  addCustomer = () => {
    const newCustomer = {
      id: this.state.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      address: this.state.address,
      postcode: this.state.postcode,

      city: this.state.city,
      email: this.state.email,
      phone: this.state.phone
    };
    this.props.saveCustomer(newCustomer);
    this.handleClose();
  };
  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add new Customer</DialogTitle>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="id"
              label="CustomerID"
              type="number"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="firstname"
              label="Firstname"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="lastname"
              label="Lastname"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="address"
              label="Address"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="postcode"
              label="Postcode"
              type="number"
              fullWidth
            />

            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="city"
              label="City"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="email"
              label="Email"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="phone"
              label="Phone number"
              type="number"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addCustomer} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <Button onClick={this.handleClickOpen} color="primary">
          ADD CUSTOMER{" "}
        </Button>
      </div>
    );
  }
}
