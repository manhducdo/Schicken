import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './index.less';
import { Link } from 'umi';

export default function ProductItem({ data, to }) {
  return (
  <>
    <Link className={styles.category} to={to}>
      <div className={styles.item}>
        <img className={styles.img} src={data.image} alt="" />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{data.title}</span>
        <div className={styles.count}>
          <p className={styles.p}>45.000đ</p>
          <span className={styles.span}>50.000đ</span>
        </div>
        <div className={styles.info}>
          <div className={styles['icon-star']}>
            <FontAwesomeIcon icon={faStar} />
            <span className={styles['text']}>2.5</span>
          </div>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faClock} />
            <span>19 phút</span>
          </div>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>2.1km</span>
          </div>
        </div>
      </div>
    </Link>
  </>
  )
}

ProductItem.defaultProps = {
  to: '/dishes/1'
}
