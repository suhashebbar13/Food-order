import Mealform from './Mealform';
import classes from './Mealitem.module.css';
import { useContext } from 'react';
import CreateContext from '../../shop/Cardcontext';
const Mealitem = props =>{
    const cartcxt = useContext(CreateContext)
    
    const addtocarthand = amount => {
        cartcxt.addItem({
            id: props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }
    const price = `$${props.price.toFixed(2)}`;
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.title}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <Mealform onaddtocart={addtocarthand} id={props.id}/>
            </div>
        </li>
    )
}

export default Mealitem;