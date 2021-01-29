import React from 'react';
import classes from './BuildControl.css';


const buildControl = (props) =>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.ingredientLabel}</div>
        
        <button onClick={props.ingredientRemoved}
        className={classes.Less}>Remove</button>

        <button 
        onClick={props.ingredientAdded}
        className={classes.More}>Add</button>
    </div>
);

export default buildControl;