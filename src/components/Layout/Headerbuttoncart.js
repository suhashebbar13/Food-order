import { useContext } from 'react';

import Carticon from '../Cart/Carticon';
// import CreateContext from '../../shop/Cardcontext';
import CreateContext from '../shop/Cardcontext';
import classes from './Headderbuttoncart.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CreateContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnclass = `${classes.button} ${classes.bump}`

  return (
    <button className={btnclass} onClick={props.onclick}>
      <span className={classes.icon}>
        <Carticon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;