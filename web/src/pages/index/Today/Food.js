import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'umi';

import styles from './index.less';

export default function Food({ data, to }) {
  return (
    <>
      <Link to={to}>
        <div className={styles.boxIMG}>
          <img className={styles.menuDetails} src={data.image} alt="" />
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <span className={styles.title}>{data.title}</span>
        <div className={styles.count}>
          <p className={styles.countRed}>45.000đ</p>
          <span className={styles.countGray}>50.000đ</span>
        </div>
      </Link>
    </>
  )
}

Food.defaultProps = {
  to: '/dishes/1'
}
