import classes from "./Model.module.css";
import React from "react";
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onclose}></div>;
};

const Modaloverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const pointer = document.getElementById('modal');

const Model = (props) => {
    return(
        <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onclose={props.onclose}/>, pointer)}
        {ReactDOM.createPortal(<Modaloverlay>{props.children}</Modaloverlay>, pointer)}
        </React.Fragment>
    )
};

export default Model;
