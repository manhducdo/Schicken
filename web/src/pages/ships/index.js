import React from 'react';
import Header from '../../components/Header/index';
import GoBack from '../../components/Header/GoBack';
import Empty from '../../components/Header/Empty';
import Ship from './ship/index';
import OrderSummary from './orderSummary/index';
import Payment from './Payment/index';

import styles from './index.less';

export default function Ships() {
  return (
    <div className={styles.container}>
      <Header title="82/116 Nhân Hoà, Nhân Chính" left={ <GoBack to="/orders"/>} right={ <Empty/>}/>
      <Ship/>
      <OrderSummary/>
      <Payment/>
    </div>
  )
}
