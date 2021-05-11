import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.scss';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Product Hunt</Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/add-product">Add Product</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
