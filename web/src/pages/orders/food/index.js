import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import styles from './index.less';

export default function Food() {
  return (
    <>
      <div className={styles.contents}>
        <div className={styles.boxBottom}>
          <div className={styles.title}>
            <p>Cơm Tỏi Xối Basic</p>
            <FontAwesomeIcon icon={faEllipsisH}/>
          </div>
          <div className={styles.into}>
            <span className={styles.count}>45.000đ</span>
            <span className={styles.amount}>X1</span>
          </div>
        </div>
      </div>
    </>
  )
}
