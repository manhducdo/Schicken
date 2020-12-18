import React from 'react';
import noti from './noti.svg';

import styles from './index.less';

export default function Item() {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <img src={noti} alt=""/>
          </div>
          <div className={styles.info}>
            <p>Ưu đãi 25k cho hoá đơn 60k</p>
            <span>Hiệu lực từ 16/12/2020 đến 17/12/2020</span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.icon}>
            <img src={noti} alt=""/>
          </div>
          <div className={styles.info}>
            <p>Ưu đãi 25k cho hoá đơn 60k</p>
            <span>Nhập mã ABCXYZ để được khuyến mãi</span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.icon}>
            <img src={noti} alt=""/>
          </div>
          <div className={styles.info}>
            <p>Ưu đãi 25k cho hoá đơn 60k</p>
            <span>Bạn cảm thấy món ăn của chúng tôi như thế nào? Feedback ngay nhận liền 100 điểm thưởng</span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.icon}>
            <img src={noti} alt=""/>
          </div>
          <div className={styles.info}>
            <p>Ưu đãi 25k cho hoá đơn 60k</p>
            <span>Nhập mã ABCXYZ để được khuyến mãi</span>
          </div>
        </div>
      </div>
    </>
  )
}
