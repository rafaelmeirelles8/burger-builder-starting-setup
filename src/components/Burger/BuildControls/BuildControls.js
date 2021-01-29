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
    {controls.map(ingredient => {
            
            return <BuildControl 
                key={ingredient.label} 
                ingredientLabel={ingredient.label} 
                ingredientAdded={() => props.ingredientAdded(ingredient.type)}
                ingredientRemoved={() => props.ingredientRemoved(ingredient.type)}>
            </BuildControl>;
        })
    }
    </div>
)


export default buildConstrols;