import React from 'react';
import { Link } from 'umi';
import styles from './index.less';

export default function Header({ to }) {
  return (
    <div className={styles.box}>
      <img className={styles.img} src="https://picsum.photos/200" alt=""/>
      <Link className={styles.icon} to={to}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12H5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 19L5 12L12 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  )
}

Header.defaultProps = {
  to: "/categories/foods"
}
