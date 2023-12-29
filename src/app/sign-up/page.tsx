'use client';
import styles from './sign.up.module.css';

export default function SignUp() {
  return (
    <div className={styles.contentWrap}>
      <h1 className={styles.title}>SIGN UP</h1>
      <div className='underlineInputWrap'>
        <input type='text' placeholder='이메일을 입력해 주세요.' autoFocus />
        <p></p>
      </div>
      <div className='underlineInputWrap'>
        <input type='text' placeholder='닉네임을 입력해 주세요.' />
        <p></p>
      </div>
      <div className='underlineInputWrap'>
        <input type='password' placeholder='패스워드를 입력해 주세요.' />
        <p></p>
      </div>
      <button className={styles.signUpButton}>회원가입</button>
    </div>
  );
}
