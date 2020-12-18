import React from 'react';
import Header from '../../components/Header/index';
import GoBack from '../../components/Header/GoBack';
import Empty from '../../components/Header/Empty';

import Map from './map/index';

import styles from './index.less';

export default function Address() {
  return (
    <div className={styles.container}>
      <Header title="Thêm địa chỉ mới" left={ <GoBack to="/ship"/>} right={ <Empty/>}/>
      <Map/>
    </div>
  )
}
