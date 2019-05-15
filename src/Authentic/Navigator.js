import React from "react";
import { Link } from "react-router-dom";
const Navigator = props => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/customerlist"> Customer </Link>
      <Link to="/trainings">Trainings</Link>
      <Link to="/calendar">Calendar</Link>
    </div>
  );
};
export default Navigator;
