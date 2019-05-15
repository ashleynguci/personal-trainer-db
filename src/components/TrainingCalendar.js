import React, { Component } from "react";
import firebaseConfig from "../firebase";
import "react-table/react-table.css";
import Moment from "react-moment";
import Button from "@material-ui/core/Button";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

class TrainingCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = { trainings: [], eventList: [] };
  }
  componentDidMount() {
    this.loadTrainings();
  }

  loadTrainings = () => {
    fetch("http://customerrest.herokuapp.com/gettrainings")
      .then(res => res.json())
      .then(jsondata => {
        this.setState({ trainings: jsondata });
        var EventList = [];
        var json = Object.values(jsondata);
        var startDate = null;
        var endDate = null;
        for (var i = 0; i < json.length; i++) {
          if (json[i].date == null) {
            continue;
          }
          try {
            startDate = new Date(json[i].date);
            endDate = new Date(json[i].date);
            //can not pass endDate = startDate, because they both reference on object, change endDate will change startDate;
            endDate.setUTCMinutes(startDate.getUTCMinutes() + json[i].duration);
            EventList.push({
              title: json[i].activity,
              start: startDate,
              end: endDate
            });
          } catch (err) {
            console.error(err);
          }
        }
        console.log(EventList);
        this.setState({ eventList: EventList });
      })
      .catch(err => console.error(err));
  };

  render() {
    const localizer = BigCalendar.momentLocalizer(moment);

    return (
      <div>
        <Button
          color="secondary"
          onClick={() => firebaseConfig.auth().signOut()}
        >
          Sign out
        </Button>
        <BigCalendar
          localizer={localizer}
          events={this.state.eventList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, width: this.state.width }}
        />
      </div>
    );
  }
}

export default TrainingCalendar;
