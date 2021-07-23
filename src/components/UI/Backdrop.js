import React from "react";
import classes from "../UI/Backdrop.module.css";

const Backdrop = ({ onModalClose }) => {
  return <div onClick={onModalClose} className={classes.backdrop} />;
};

export default Backdrop;
