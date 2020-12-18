import React from 'react';
import { Link } from 'umi';
import styles from './index.less';

export default function Category( {data, to }) {
  return (
    <>
      <Link to={to} className={styles.itemFood} key={data.id}>
        <img className={styles.imgMenu} src={data.image} alt="" />
        <span>{data.title}</span>
      </Link>
    </>
  )
}

Category.defaultProps = {
  to: '/categories/foods'
}
