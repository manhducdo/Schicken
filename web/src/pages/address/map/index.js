import React from 'react';
import { Link } from 'umi';

import styles from './index.less';

export default function Map( {to }) {
  return (
    <>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe width={375} height={375} id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
        </div>
      </div>
      <form action="/">
        <div className={styles.search}>
          <label htmlFor="name">* Tên</label>
          <input className={styles['input-field']} type="text" id="address" name="address" defaultValue="Ví dụ: Công ty, Lớp học" />
          <span>Đặt tên cho địa chỉ này để sử dụng vào lần sau</span>
        </div>

        <div className={styles.search}>
          <label htmlFor="address">*Địa chỉ</label>
          <input className={styles['input-field']} type="text" id="address" name="address" defaultValue="Ví dụ: Tên toà nhà địa chỉ gần đó" />
          <span>Nhập chi tiết địa chỉ cho tài xế</span>
        </div>

        <div className={styles.search}>
          <label htmlFor="note">*Ghi chú cho tài xế</label>
          <input className={styles['input-field']} type="text" id="note" name="note" defaultValue="Chỉ dẫn chi tiết địa chỉ cho tài xế" />
          <span>Ghi chú thêm lưu ý giao hàng tại đây</span>
        </div>
      </form>

      <div className={styles.bottomFixed}>
        <div className={styles.boxButton}>
          <Link to={to} className={styles.button}>Thanh toán</Link>
        </div>
      </div>
    </>
  )
}

Map.defaultProps = {
  to: '/'
}
