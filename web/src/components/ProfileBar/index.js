import React from 'react';
import { Link } from 'umi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import imgMomo from './img/index/m.svg';
import imgKing from './img/index/king.svg';
import right from './img/index/right.svg';
import styles from './index.less';

export default function ProfileBar({ title }) {
  return (
    <div className={styles.wrap}>
      <Link className={styles.item} to="/momo">
        <img className={styles.imgIconKing} src={imgMomo} alt="" />
        <span>Dùng ví Momo</span>
        <img src={right} alt="" />
      </Link>
      <Link className={styles.item} to='/points'>
        <img className={styles.imgIconMomo} src={imgKing} alt="" />
        <span>100 Points</span> <img src={right} alt="" />
      </Link>

      <div className={styles.search}>
          <FontAwesomeIcon className={styles.iconSearch} icon={faSearch} />
          <input className={styles['input-field']} type="text" placeholder="Bạn muốn ăn gì?"/>
      </div>
    </div>
  )
}
