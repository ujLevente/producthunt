import React from 'react';
import MainNavigation from './MainNavigation';
import style from './Layout.module.scss';

const Layout = (props) => {
  return (
    <div className={style.app}>
      <MainNavigation />
      <main className={style.main} style={{ height: '1000px' }}>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
