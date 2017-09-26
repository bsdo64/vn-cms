import React, {Componet} from 'react';
import style from './NavMain.css';
import cx from 'classnames';

const NavMain = () => {
  return (
      <div className={style['nav-main']}>
        <div className={style.wrap}>
          <a className={style['nav-home']} href="/react/">
            Venacle
          </a>
          <div className={style['nav-lists']}>
            <ul className={cx(style['nav-site'], style['nav-site-internal'])}>
              <li><a href="/react/docs/hello-world.html" className={style.active}>데이터</a></li>
              <li><a href="/react/tutorial/tutorial.html">문서</a></li>
              <li><a href="/react/community/support.html">Community</a></li>
              <li><a href="/react/blog/">Blog</a></li>
            </ul>
            <ul className={cx(style['nav-site'], style['nav-site-external'])}>
              <li><a href="https://github.com/facebook/react">GitHub</a></li>
              <li><a href="https://github.com/facebook/react/releases">v15.6.1</a></li>
            </ul>
          </div>
        </div>
      </div>
  )
};

export default NavMain;