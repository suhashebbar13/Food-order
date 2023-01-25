import classes from "./Checkout.module.css";
import React,{useRef, useState} from "react";

const isvalidstring = (value) => value.trim() === '';
const isnumber = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const [formvalid,setformvalid] = useState({
        name:true,
        street:true,
        pincode:true,
        city:true
    })
    const name = useRef()
    const street = useRef()
    const pincode = useRef()
    const city = useRef()

    const comfirmhandler = (event) =>{
        event.preventDefault();

        const iname = name.current.value;
        const istreet = street.current.value;
        const ipin = pincode.current.value;
        const icity = city.current.value;

        const nameisvalid = !isvalidstring(iname);
        const streeisvalid = !isvalidstring(istreet);
        const cityisvalid = !isvalidstring(icity);
        const pinisvalid = isnumber(ipin);

        setformvalid({
            name:nameisvalid,
            street:streeisvalid,
            pincode:pinisvalid,
            city:cityisvalid
        })

        if(!formvalid){
            return;
        }

        props.onconfirm({
            name:iname,
            street:istreet,
            pincode:ipin,
            city:icity
        });
    }

    const cssforinvalid = `${classes.control} ${formvalid ? '' : classes.invalid}`

  return (
    <form onSubmit={comfirmhandler} className={classes.form}>
      <div className={cssforinvalid}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={name}/>
        {!formvalid.name && <p>Enter correct name</p>}
      </div>
      <div className={cssforinvalid}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={street}/>
        {!formvalid.street && <p>Enter correct street</p>}
      </div>
      <div className={cssforinvalid}>
        <label htmlFor="pincode">Pincode</label>
        <input type="text" id="pincode" ref={pincode}/>
        {!formvalid.pincode && <p>Enter correct pincode (exact 5)</p>}
      </div>
      <div className={cssforinvalid}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={city}/>
        {!formvalid.city && <p>Enter correct city</p>}
      </div>
      <div className={cssforinvalid}>
        <button type='button' onClick={props.oncancel}>Cancel</button>
        <button type='submit' clssName={classes.confirm}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
