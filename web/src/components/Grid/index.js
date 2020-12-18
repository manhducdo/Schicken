import React from 'react';
import { useRequest } from 'umi';
import cls from 'classnames';

import styles from './index.less';

export default function Grid( { service, itemClass, Item, Empty } ) {
  const dataAsync = useRequest(service);

  if (dataAsync.loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <>
      {dataAsync.data ? (
         <div className={styles.items}>
          {dataAsync.data.list.map(s => (
            <div className={cls(styles.item, itemClass)} key={s.id}>
              <Item data={s} />
            </div>
          ))}
       </div>
      ) : (
        <Empty />
      )}

    </>
  )
}


Grid.defaultProps = {
  Empty: () =>  null
}
