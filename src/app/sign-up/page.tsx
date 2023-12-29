'use client';
import styles from './sign.up.module.css';
import Link from 'next/link';

export default function SignUp() {
  return (
    <div className={`${styles.contentWrap} noDrag`}>
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
      <div className={styles.buttonWrap}>
        <button className={styles.signUpButton}>회원가입</button>
        <Link className={styles.smallText} href={'/sign-in'}>
          이미 회원이신가요?
        </Link>
      </div>
    </div>
  );
}
