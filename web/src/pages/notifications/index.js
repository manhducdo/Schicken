import React from 'react';
import HeaderDark from '../../components/Header/HeaderDark/index';
import Notification from '../../components/Header/Notification';
import Empty from '../../components/Header/Empty';
import Nav from '../../components/Nav/index';

import Item from './item/Item';

import styles from './index.less';
export default function Notifications() {
  return (
    <div className={styles.container}>
      <HeaderDark title="Thông báo" left={ <Empty/> } right={ <Notification/> }/>
      <Item/>
      <Nav/>
    </div>
  )
}
