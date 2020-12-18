import React from 'react';
import styles from './index.less';

export default function Header({
  left, title, right }) {
  return (
    <div className={styles.container}>
      {left && <div className={styles.left}>{left}</div>}
      <div className={styles.title}>{title}</div>
      {right && <div className={styles.right}>{right}</div>}
    </div>
  )
}


Header.defaultProps = {
  title: "82/116 Nhân Hoà, Phường Nhân Chính"
}
