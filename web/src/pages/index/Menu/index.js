import React from 'react'
import Box from '@/components/Box';
import Grid from '@/components/Grid';
import Category from './Category';

import styles from './index.less'

export default function Menu() {

  return (
    <Box title="Menu" next="/categories">
      <Grid service="/recent-categories" itemClass={styles.item} Item={Category} />
    </Box>
  )
}
