import styles from './sign.in.module.css';
import Link from 'next/link';

export default function SignIp() {
  return (
    <div className={`${styles.contentWrap} noDrag`}>
      <h1 className={styles.title}>SIGN IN</h1>
      <div className='underlineInputWrap'>
        <input type='text' placeholder='이메일을 입력해 주세요.' autoFocus />
        <p></p>
      </div>
      <div className='underlineInputWrap'>
        <input type='password' placeholder='패스워드를 입력해 주세요.' />
        <p></p>
      </div>
      <div className={styles.buttonWrap}>
        <button className={styles.signInButton}>로그인</button>
        <Link className={styles.smallText} href={'/sign-up'}>
          아직 회원이 아니신가요?
        </Link>
      </div>
    </div>
  );
}
