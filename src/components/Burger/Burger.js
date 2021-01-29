import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{
    

    const trasnformedIngredients = props.ingredients ? Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, index) => {
            return <BurgerIngredient key={igKey + index} type={igKey}></BurgerIngredient>;
        })
    }) : null;

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {trasnformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;