import React, { useState } from "react";
// import OtpInput from 'react-otp-input';
import { Link } from 'umi';

import styles from './index.less';

export default function Otp( {to} ) {
  const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

  return (
    <div className={styles.container}>
      <h1 className={styles['text-center']} style={{color: '#EE1C25'}}>S c h i c k e n</h1>
      <h2 className={styles['text-center']} style={{color: '#EE1C25'}}>Nhập mã OTP để xác nhận</h2>
      <span className={styles.title}>Mã OTP sẽ được gửi đến số điện thoại đăng nhập của bạn trong vài giây</span>
      <div className={styles.row}>
        <div className={styles['text-center']}>
          <div className={styles.inputOtp}>
            {otp.map((data, index) => {
                return (
                    <input
                        className={styles['otp-field']}
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={e => handleChange(e.target, index)}
                        onFocus={e => e.target.select()}
                    />
                );
            })}
          </div>

          <Link to={to} className={styles.resend}>Gửi lại mã OTP</Link>
          <p>
            <button
                className="btn btn-primary"
                onClick={e =>
                    alert("Entered OTP is " + otp.join(""))
                }
            >
                Xác nhận
            </button>
          </p>
          </div>
      </div>
    </div>
  )
}

Otp.defaultProps = {
  to: '/resendOtp'
}


