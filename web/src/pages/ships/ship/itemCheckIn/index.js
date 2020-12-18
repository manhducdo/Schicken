import React from 'react';

import checkAddress from './right.svg';
import right from './chevron_right.svg';

import styles from './index.less';

export default function ItemCheckIn() {
  return (
    <>
      <div className={styles.message}>
        <div>
          <img src={checkAddress} alt=""/>
        </div>
        <div className={styles.checkIn}>
          <p>70/116 Nhân Hoà, Nhân Chính</p>
          <p className={styles.fontSize}>70/116 Nhân Hoà, Nhân Chính</p>
        </div>
        <div>
          <img src={right} alt=""/>
        </div>
      </div>
    </>
  )
}
