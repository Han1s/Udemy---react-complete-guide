import React from 'react';
import classes from './Navbar.css';
import { NavLink } from 'react-router-dom';

const navbar = () => (
    <div className='topnav'>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/courses">Courses</NavLink>
    </div>
)

export default navbar;