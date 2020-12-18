import React from 'react';
import { Link } from 'umi';
import Header from './Header/index';
import Contents from './Contents/index';
import ExtraFood from './ExtraFood/index';
import SideDishes from './SideDishes/index';
import Soup from './Soup/index';
import Rice from './Rice/index';
import Sauce from './Sauce/index';
import Top from './Top/index';
import Note from './Note/index';

import styles from './index.less';

export default function Dishes( {to, total}) {
  return (
    <div className={styles.wrapper}>

      {/* ảnh */}
      <Header/>

      {/* Nội dung */}
      <Contents/>

      {/* đồ ăn thêm */}
      <ExtraFood/>

      {/* đồ ăn kèm cực ngon */}
      <SideDishes/>

      {/* tuỳ chọn canh */}
      <Soup/>

      {/* tuỳ chọn cơm */}
      <Rice/>

      {/* tuỳ chọn nước chấm */}
      <Sauce/>

      {/* top mỡ */}
      <Top/>

      {/* lưu ý đặc biệt */}
      <Note/>
    </div>
  )
}


