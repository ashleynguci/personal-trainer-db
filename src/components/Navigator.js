import React from "react";
import { Link, Switch } from "react-router-dom";
const Navigator = props => {
  return (
    <div>
      <Link to="/"> Customers </Link>

      <Link to="/trainings">Trainings</Link>
    </div>
  );
};
export default Navigator;
