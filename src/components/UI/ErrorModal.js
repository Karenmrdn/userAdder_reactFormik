import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, onModalClose }) => {
  return (
    <div>
      <div onClick={onModalClose} className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onModalClose}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
