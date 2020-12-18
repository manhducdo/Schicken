import React from 'react';
import ItemCheckIn from './itemCheckIn/index';
import InfoAddress from './infoAddress/index';

import styles from './index.less';

export default function Ship( { edit}) {
  return (
    <>
      <div className={styles.chooses}>
          <div className={styles.choose}>
            <p>Giao tới</p>
          </div>
      </div>

      <div className={styles.where}>
        <ItemCheckIn/>
        <InfoAddress/>
      </div>
    </>
  )
}

Ship.defaultProps = {
  edit: '/edit'
}
