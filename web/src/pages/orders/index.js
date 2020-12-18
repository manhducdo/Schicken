import React from 'react';
import HeaderDark from '../../components/Header/HeaderDark/index';
import GoBack from '../../components/Header/GoBack';
import Table from './table/table';
import Food from './food/index';
import Payment from './payment/index';

import styles from './index.less';

export default function Orders() {
  return (
    <>
      <HeaderDark className={styles.header} title="Tổng hoá đơn" left={<GoBack to='/dishes/1'/>}/>
      <Table/>
      <Food/>
      <Food/>
      <Food/>
      <Payment/>
    </>
  )
}
