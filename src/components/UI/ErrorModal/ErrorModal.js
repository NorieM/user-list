import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick ={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className={classes.content}>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>OK</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
