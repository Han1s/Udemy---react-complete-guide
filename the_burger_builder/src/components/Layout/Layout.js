import React, { Fragment } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navitation/Toolbar/Toolbar';

const layout = (props) => (
    <Fragment>
        <Toolbar />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
)

export default layout;