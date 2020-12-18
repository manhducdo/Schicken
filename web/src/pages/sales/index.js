import React from 'react';
import Header from './Header/index';
import Count from './Count/index';

import styles from './index.less';

export default function Sales() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.title}>
        <p>
          Ưu đãi voucher 25.000VNĐ
        </p>
      </div>
      <Count/>
    </div>
  )
}
