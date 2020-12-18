import React from 'react';
// import { useRequest } from 'umi';

import HeaderDark from '@/components/Header/HeaderDark';
import Scroll from '@/components/Scroll';

import GoBack from '../../../components/Header/GoBack';

import Grid from '../../../components/Grid/index';
import ProductItem from '../$id/Food/index';

import styles from './index.less';

export default function CategoryDetail(  ) {

  return (
    <div className={styles.container}>
      <HeaderDark title="Cơm" left={<GoBack />}/>

      <Scroll/>
      <div className={styles.boxItem}>
        <Grid service="/food-today" itemClass={styles.food} Item={ProductItem} />
      </div>
    </div>
  );
}
