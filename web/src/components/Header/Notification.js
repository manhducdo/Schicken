import React from 'react';
import { Link } from 'umi';
import notification from './notification.svg';

export default function Notification() {
  return (
    <Link to="/notifications">
      <img src={notification}/>
    </Link>
  )
}
