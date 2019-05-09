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
      date: "",
      duration: "",
      activity: "",
      customer: ""
    };
  }
  handleClickOpen = () => {
    this.setState({
      open: true,
      date: "",
      duration: "",
      activity: "",
      customer: this.props.customer._original.links[0].href
    });
    console.log(this.props.customer);
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  addTraining = () => {
    const newTraining = {
      date: this.state.date,
      duration: this.state.duration,
      activity: this.state.activity,
      customer: this.state.customer
    };
    this.props.saveTraining(newTraining);
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
          <DialogTitle id="form-dialog-title">Add Training</DialogTitle>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="date"
              type="date"
              label="Date"
              value={this.state.date}
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="duration"
              label="Duration in minutes"
              value={this.state.duration}
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="activity"
              label="Activity"
              value={this.state.activity}
              fullWidth
            />

            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="customer"
              label="Customer Info"
              value={this.state.customer}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addTraining} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <Button onClick={this.handleClickOpen} color="primary">
          ADD TRAINING{" "}
        </Button>
      </div>
    );
  }
}
