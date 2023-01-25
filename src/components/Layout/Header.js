import React from "react";
import imgi from '../../assests/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./Headerbuttoncart";

const Header = props => {
    return <>
        <header className={classes.header}>
            <h2>Our Meals</h2>
            {/* <button>Cart</button> */}
            <HeaderCartButton onclick={props.onshowcart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={imgi} alt='Table m' />
        </div>
    </>
};

export default Header;