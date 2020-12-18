import React from 'react';
import { Link } from 'umi';
import rightCircle from './red-right.svg';

import styles from './index.less';

export default function Box({ title, children, next }) {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <Link to={next}><img className={styles.viewMore} src={rightCircle} alt="" /></Link>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </>
  )
}
