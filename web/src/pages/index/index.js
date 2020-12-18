import React from 'react';

import Header from '@/components/Header';
import ProfileBar from '@/components/ProfileBar/index';
import Menu from './Menu/index';
import FoodSlides from './Sliders/index';
import Today from './Today/index';
// import GoBack from '../../components/Header/GoBack';
// import Notification from '../../components/Header/Notification';
import Nav from '../../components/Nav/index';

import styles from './index.less';

export default () => {
  return (
    <div className={styles.container}>
      <Header title="82/116 Nhân Hoà, Nhân Chính"/>
      <ProfileBar/>
      <FoodSlides />
      <Menu/>
      <Today />
      <Nav/>
    </div>
  );
}

// left={<GoBack />} right={<Notification />}
