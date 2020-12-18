import React from 'react';
import styles from './index.less';

export default function HeaderDark({
  left, title, right }) {
  return (
    <div className={styles.container}>
      {left && <div className={styles.left}>{left}</div>}
      <div className={styles.title}>{title}</div>
      {right && <div className={styles.right}>{right}</div>}
    </div>
  )
}

