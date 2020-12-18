import React from 'react';
import { Link } from 'umi';

import styles from './index.less';

export default function Item() {
  return (
    <>
      <Link to="/categories/foods">
        <div className={styles.imgListItem}>
          <div className={styles.itemParent}>
            <img src="https://picsum.photos/200" alt="" />
          </div>
          <div className={styles.textDescription}>
            <p className={styles.shadow}>Cơm gà,</p>
            <p className={styles.textRed}>Siêu siêu hấp dẫn</p>
          </div>
        </div>
      </Link>
    </>
  )
}
