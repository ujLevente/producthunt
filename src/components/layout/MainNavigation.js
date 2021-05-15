import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './MainNavigation.module.scss';
import ClickableIcon from '../UI/ClickableIcon';
import { BREAKPOINT_MOBILE } from '../../global-constants';

const MainNavigation = () => {
  const [isDarwerOpen, setIsDarwerOpen] = useState(false);

  const drawerClassName = isDarwerOpen
    ? style['drawer-open']
    : style['drawer-close'];

  const toggleDrawer = () => {
    const isMobileSize = window.innerWidth < BREAKPOINT_MOBILE; //TODO kivenni v lecserlni

    if (isMobileSize) {
      setIsDarwerOpen((isDarwerOpen) => !isDarwerOpen);
    }
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to="/">Product Hunt</Link>
      </div>
      <nav className={style.nav}>
        <ul className={drawerClassName}>
          <li>
            <ClickableIcon
              iconName="navigate_next"
              className={style['close-arrow']}
              onClick={toggleDrawer}
            />
          </li>
          <li>
            <NavLink
              onClick={toggleDrawer}
              exact
              activeClassName={style['navlink-active']}
              to="/"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleDrawer}
              exact
              activeClassName={style['navlink-active']}
              to="/add-product"
            >
              Add Product
            </NavLink>
          </li>
        </ul>
        <ClickableIcon
          iconName="menu"
          onClick={toggleDrawer}
          className={style['hamburger-menu']}
        />
      </nav>
    </header>
  );
};

export default MainNavigation;
