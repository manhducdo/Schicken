import React from 'react';

import styles from './index.less';

export default function Sauce() {
  return (
    <div className={styles.contents}>
      <div className={styles.infor}>
        <p>Tuỳ Chọn - Nước Chấm</p>
        <span>Không bắt buộc, tối đa 1</span>
      </div>

      <div className={styles.chooses}>
        <div className={styles.choose}>
          <form>
            <input type="checkbox" name="food" value="food"/>
            <label htmlFor="food">Đậu Phộng Cốt Dừa</label>
          </form>
        </div>
        <div className={styles.item}>
          <span>+5.000</span>
        </div>
      </div>

      <div className={styles.chooses}>
        <div className={styles.choose}>
          <form>
            <input type="checkbox" name="food" value="food"/>
            <label htmlFor="food">Đậu Phộng Cốt Dừa</label>
          </form>
        </div>
        <div className={styles.item}>
          <span>+5.000</span>
        </div>
      </div>

      <div className={styles.chooses}>
        <div className={styles.choose}>
          <form>
            <input type="checkbox" name="food" value="food"/>
            <label htmlFor="food">Đậu Phộng Cốt Dừa</label>
          </form>
        </div>
        <div className={styles.item}>
          <span>+5.000</span>
        </div>
      </div>
    </div>
  )
}
