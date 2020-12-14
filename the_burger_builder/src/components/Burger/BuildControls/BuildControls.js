import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', typpe: 'salad' },
    { label: 'Bacon', typpe: 'bacon' },
    { label: 'Cheese', typpe: 'cheese' },
    { label: 'Meat', typpe: 'meat' },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map((ctrl) => (
              <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.typpe)} />
        ))}
    </div>
);

export default buildControls;