import React from "react";
import classes from "./UI.module.css";
const UI = (props) => {
  return <main className={classes.main}>{props.children}</main>;
};

export default UI;
