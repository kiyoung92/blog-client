import styles from './social-login.module.css';

export default function SocialLogin() {
  return (
    <div className={styles.socialLoginWrap}>
      <button className={styles.githubLogo}></button>
      <button className={styles.appleLogo}></button>
      <button className={styles.googleLogo}></button>
      <button className={styles.kakaoLogo}></button>
      <button className={styles.naverLogo}></button>
    </div>
  );
}
