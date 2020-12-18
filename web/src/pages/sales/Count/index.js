import React from 'react';
import { Link } from 'umi';

import styles from './index.less';

export default function Count( {total }) {
  return (
    <>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p>Điểm</p>
          <div className={styles.point}>
            <p>100</p>
            <span>điểm</span>
          </div>
        </div>
        <div className={styles.discount}>
          <p>Hiệu lực</p>
          <div className={styles.point}>
            <p>từ</p>
            <span>30/11/2020</span>
          </div>
          <div className={styles.point}>
            <p>đến</p>
            <span>30/11/2020</span>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <p>* 4 Món Chính: 110Gram Ba Chỉ Heo, 1 Thố Cơm Japonia, 1 Bát Canh Chua, Lòng Mề Xào.</p>
        <p>* 3 Món Phụ: Trứng Cuộn, Rau Luộc, Hoa Quả.</p>
        <p>* Free: Tăm Nha Khoa, Khăn Lạnh, Găng Tay</p>
      </div>
      <div className={styles.bottomFixed}>
        <div className={styles.boxButton}>
          <Link to={total} className={styles.button}>Đổi điểm</Link>
        </div>
      </div>
    </>
  )
}

Count.defaultProps = {
  total: '/'
}

