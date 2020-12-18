import React from 'react';
import Box from '../../../components/Box/index';
import Grid from '@/components/Grid';
import Food from './Food';

import styles from './index.less';

export default function Today() {
  return (
    <>
      <Box title="Món ngon mỗi ngày" next="/today"/>
      <Grid service="/food-today" itemClass={styles.food} Item={Food} />
    </>
  )
}
