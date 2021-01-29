import React from 'react';
import classes from './BuildConstrol.css';


const buildControl = (props) =>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.ingredientLabel}</div>
        <button className={classes.Less}>Remove</button>
        <button className={classes.More}>Add</button>
    </div>
);

export default buildControl;