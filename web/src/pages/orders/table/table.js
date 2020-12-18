import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

import styles from './index.less';

export default function Table( { to, money }) {
  return (
    <>
      <div className={styles.chooses}>
          <div className={styles.choose}>
            <p>Bàn 2</p>
          </div>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faTag}/>
            <span>Bảng giá chung</span>
          </div>
        </div>
    </>
  )
}

Table.defaultProps = {
  to: "/ship",
  money: "/money"
}


