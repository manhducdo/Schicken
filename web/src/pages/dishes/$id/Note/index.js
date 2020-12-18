import React from 'react';
import { Link } from 'umi';

import styles from './index.less';

export default function Note( {total, decrease, increase}) {
  return (
    <div className={styles.special}>
      <div className={styles.information}>
        <p>Lưu ý đặc biệt</p>
        <span>Không bắt buộc</span>
      </div>

      <div className={styles.boxChoose}>
        <input className={styles.inputType} type="input" name="food" placeholder="Vd: Không hành"/>
      </div>
      <div className={styles.sort}>
        <Link to={decrease}>
          <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="1.15381" width="38.6923" height="38.6923" rx="2.80769" stroke="#B9B9B9"/>
          <path d="M9.71631 20.5H29.9759" stroke="#EE1C25" strokeWidth="1.65385" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <p>1</p>
        <Link to={increase}>
          <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.03845" y="1.15381" width="38.6923" height="38.6923" rx="2.80769" stroke="#B9B9B9"/>
          <path d="M20.3846 10.3701V30.6297" stroke="#EE1C25" strokeWidth="1.65385" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.2548 20.5H30.5144" stroke="#EE1C25" strokeWidth="1.65385" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
      <div className={styles.bottomFixed}>
        <div className={styles.boxButton}>
          <Link to={total} className={styles.button}>Chọn món</Link>
        </div>
      </div>
    </div>
  )
}

Note.defaultProps = {
  total: '/orders',
  increase: '/increase',
  decrease: '/decrease'
}
