import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.wrap}>
      <Link className={styles.logoWrap} href={'/'}>
        <p className={styles.logo}>CAT( )</p>
      </Link>
      <div></div>
      <div className={styles.signWrap}>
        <Link className={styles.signButton} href={'/sign-up'}>
          <p>Sign Up</p>
        </Link>
        <Link className={styles.signButton} href={'/sign-in'}>
          <p>Sign In</p>
        </Link>
      </div>
    </header>
  );
}
