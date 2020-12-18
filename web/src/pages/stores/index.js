import React from 'react'
import HeaderDark from '../../components/Header/HeaderDark';
import GoBack from '../../components/Header/GoBack';
import Grid from '../../components/Grid/index';
import Store from './store/index';

import styles from './index.less';

export default function Stores() {
  return (
    <div>
      <HeaderDark title="Chọn cửa hàng" left={<GoBack to='/ship'/>}/>
      <Grid service="/store" itemClass={styles.store} Item={Store} />
    </div>
  )
}
