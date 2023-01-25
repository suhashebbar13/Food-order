import classes from './Cartitem.module.css';

const Cartitem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default Cartitem;




// ref =useRef();


// const handler = ( ) =>{
//   data = ref.current.value;
//   props.propname(data)
// }

// function name(){
//   <input ref = {ref}>Name</input>
// }