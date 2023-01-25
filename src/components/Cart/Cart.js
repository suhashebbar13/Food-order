import Model from "../Ui/Model";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CreateContext from "../shop/Cardcontext";
import Cartitem from "./Cartitem";
import React, {useState} from "react";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [checkout,setseckout] = useState(false);
  const [issubmiting,setissubmiting] = useState(false);
  const [issubmited,setsubmited] = useState(false);

  const cartcxt = useContext(CreateContext);

  const totalamount = `$${cartcxt.totalamount.toFixed(2)}`;

  const hasitems = cartcxt.items.length > 0;

  const cartitemremove = (id) => {
    cartcxt.removeItem(id)
  };

  const cartitemadd = (item) => {
    cartcxt.addItem({...item, amount:1})
  };

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartcxt.items.map((item) => (
        <Cartitem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartitemremove.bind(null, item.id)}
          onAdd={cartitemadd.bind(null, item)}
        ></Cartitem>
      ))}
    </ul>
  );

  const checkouthandler = () =>{
    setseckout(true);
  }      

  const submithandler = async (userdata) =>{
    setissubmiting(true)
    await fetch('https://trail-a082e-default-rtdb.firebaseio.com/orders.json',{
      method:'POST',
      body:JSON.stringify({
        user: userdata,
        orderditems: cartcxt.items
      })
    })
    setissubmiting(false);
    setsubmited(true)
    cartcxt.clearcart();
  }

  const showcart =(
    <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onclose}>
          Close
        </button>
        {hasitems && <button className={classes.button} onClick={checkouthandler}>Order</button>}
      </div>
  );

    const cartmodel = 
      <>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      {checkout && <Checkout oncancel={props.onclose} onconfirm={submithandler}/>}
      {!checkout && showcart}
      </>

    const submiting = <p>Submiting the data...</p>
    
    const submited = <p>Order is submited</p>

  return (
    <Model onclose={props.onclose}>
      {!issubmiting && !issubmited && cartmodel}
      {issubmiting && !issubmited && submiting}
      {!issubmiting && issubmited && submited}
    </Model>
  );
};

export default Cart;
