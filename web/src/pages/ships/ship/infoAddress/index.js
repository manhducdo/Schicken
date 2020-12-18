import React from 'react';
import { Link } from 'umi';
import phone from './bx_bxs-phone-call.svg';

import styles from './index.less';

export default function InfoAddress( {edit, store} ) {
  return (
    <>
      <div className={styles.address}>
        <div className={styles.col}></div>
        <div className={styles.col}>
          <div className={styles.detail}>
            <p>Chưa thêm chi tiết địa chỉ</p>
            <p>Chưa thêm ghi chú cho tài xế</p>
          </div>
          <Link to={edit}>Sửa</Link>
        </div>
      </div>

      <div className={styles.message}>
        <div className={styles.note}>
        <div>
          <img src={phone} alt=""/>
        </div>
          <span>Số điện thoại nhận hàng</span>
        </div>
        <Link to={edit}>Thay đổi</Link>
      </div>

      <div className={styles.search}>
        <input className={styles['input-field']} type="text" placeholder="035.396.6677"/>
      </div>

      <div className={styles.time}>
        <div className={styles.detail}>
          <p>Thời gian giao</p>
          <p>Giao ngay (19 phút)</p>
        </div>
        <Link to={store}>Thay đổi</Link>
      </div>
    </>
  )
}

InfoAddress.defaultProps = {
  edit: '/address',
  store: '/store'
}
