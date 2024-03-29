import React from 'react';
import MainNavigation from './MainNavigation';
import style from './Layout.module.scss';

const Layout = (props) => {
  return (
    <div className={style.app}>
      <MainNavigation />
      <main className={style.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
