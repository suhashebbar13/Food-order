import classes from "./Mealform.module.css";
import Input from "../../Ui/Input";
import React, { useRef, useState } from "react";

const Mealform = (props) => {
  const submithandler = (event) => {
    event.preventDefault();

    const amountvalue = amountentered.current.value;
    const amount = +amountvalue;

    if(amountvalue.trim().length===0 || amount<1 || amount>5){
        setenteredamount(false);
        return;
    }
    props.onaddtocart(amount);
  };
  const amountentered = useRef();
  const [enteredamount, setenteredamount] = useState(true);
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <Input
        ref={amountentered}
        label="amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!enteredamount && <p>Please enter the amount from 1 to 5</p>}
      <input type='text'>Name</input>
    </form>
  );
};

export default Mealform;
