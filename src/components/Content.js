import React, {Componet} from 'react';
import style from './Content.css';
import cx from 'classnames';

import NavMenu from './NavMenu.js';
import InnerContent from './InnerContent.js';

const Content = () => {
  return (
      <section className={cx(style.content, style.wrap, style.documentationContent)}>
        <NavMenu />
        <InnerContent />
      </section>
  )
};

export default Content;