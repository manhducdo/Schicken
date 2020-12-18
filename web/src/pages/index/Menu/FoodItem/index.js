import React from 'react';
import styles from './index.less';

export default function FoodItem() {
  return (
    <div>
      <div className={styles.itemFood}>
        <img className={styles.imgMenu} alt="" />
        <span>{title}</span>
      </div>
    </div>
  )
}
