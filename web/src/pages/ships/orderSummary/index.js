import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import styles from './index.less';

export default function OrderSummary() {
  return (
    <>
      <div className={styles.payment}>
        <p>Tóm tắt đơn hàng</p>
      </div>

      <div className={styles.contents}>

        {/* Cơm Tỏi Xối Basic */}
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

        {/* Cơm gà */}
        <div className={styles.boxBottom}>
          <div className={styles.title}>
            <p>Cơm Gà</p>
            <FontAwesomeIcon icon={faEllipsisH}/>
          </div>
          <div className={styles.into}>
            <span className={styles.count}>45.000đ</span>
            <span className={styles.amount}>X1</span>
          </div>
        </div>

        {/* Coca Cola */}
        <div className={styles.boxBottom}>
          <div className={styles.title}>
            <p>Coca Cola</p>
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
