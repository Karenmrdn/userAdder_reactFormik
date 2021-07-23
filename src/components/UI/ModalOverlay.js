import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "../UI/ModalOverlay.module.css";

const ModalOverlay = ({ title, message, onModalClose }) => {
  return (
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
  );
};

export default ModalOverlay;
