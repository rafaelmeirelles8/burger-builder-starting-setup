import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';



const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];
    


const buildConstrols = (props) =>
(
    <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ingredient => {
            
            return <BuildControl 
                key={ingredient.label} 
                ingredientLabel={ingredient.label} 
                ingredientAdded={() => props.ingredientAdded(ingredient.type)}
                ingredientRemoved={() => props.ingredientRemoved(ingredient.type)}
                disabledInfo={props.disabledInfo[ingredient.type]}>
            </BuildControl>;
        })
    }
    <button className={classes.OrderButton}
    disabled={props.disable}>ORDER NOW</button>
    </div>
)


export default buildConstrols;