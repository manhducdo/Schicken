import React from 'react';
import { Link } from 'umi';

import moneyBag from './emojione_money-bag.svg';
import down from './ic_round-navigate-next.svg';

import styles from './index.less';

export default function Payment( {to, money} ) {
  return (
    <>
      <div className={styles.payment}>
        <p>Phương thức thanh toán</p>
      </div>

      <div className={styles.cards}>
        <Link className={styles.card} to={money}>
          <div>
            <img src={moneyBag} alt=""/>
          </div>
          <p>Tiền mặt</p>
          <div>
            <img src={down} alt=""/>
          </div>
        </Link>
        <div className={styles.discount}>
          <p>Ưu đãi 25k đơn hàng</p>
        </div>
      </div>

      <div className={styles.bottomFixed}>
        <div className={styles.total}>
          <p>Tổng cộng</p>
          <span>90.000đ</span>
        </div>
        <div className={styles.boxButton}>
          <Link to={to} className={styles.button}>Đặt đơn</Link>
        </div>
      </div>
    </>
  )
}

Payment.defaultProps = {
  to: '/',
  money: '/money'
}
