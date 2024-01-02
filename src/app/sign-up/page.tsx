'use client';
import {
  BaseSyntheticEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import styles from './sign.up.module.css';
import Link from 'next/link';
import axios from 'axios';

export default function SignUp() {
  const [authToken, setAuthToken] = useState('');
  const [email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);
  const [name, setName] = useState('');
  const [checkName, setCheckName] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined);
  const [useEmail, setUseEmail] = useState(false);
  const [usePassword, setUsePassword] = useState(false);
  const [useName, setUseName] = useState(false);
  const [isReadySignUp, setIsReadySignUp] = useState(false);

  const debounceInput = useCallback(
    (setter: Dispatch<SetStateAction<string>>, serverUrl: string | undefined) =>
      (e: BaseSyntheticEvent) => {
        clearTimeout(timer);
        const obj = Object();
        const key = e.target.name;
        setter(e.target.value);
        obj[key] = e.target.value;
        setTimer(
          setTimeout(async () => {
            if (serverUrl) {
              try {
                const res = await axios.post(serverUrl, { authToken, ...obj });
                if (res.data.status === 'success') {
                  setInputState(key, true);
                }
              } catch (error) {
                setInputState(key, false);
              }
            }
          }, 500),
        );
      },
    [email, password, name, authToken],
  );

  const emailHandler = debounceInput(
    setEmail,
    process.env.NEXT_PUBLIC_EMAIL_CHECK_SERVER_URL,
  );
  const nameHandler = debounceInput(
    setName,
    process.env.NEXT_PUBLIC_NAME_CHECK_SERVER_URL,
  );
  const passwordHandler = debounceInput(
    setPassword,
    process.env.NEXT_PUBLIC_PASSWORD_CHECK_SERVER_URL,
  );

  const setInputState = (stateKey: string, bool: boolean) => {
    if (stateKey === 'email') setCheckEmail(bool);
    if (stateKey === 'password') setCheckPassword(bool);
    if (stateKey === 'name') setCheckName(bool);
  };

  const useEmailHandler = () => {
    if (!useEmail) setUseEmail(true);
  };

  const useNameHandler = () => {
    if (!useName) setUseName(true);
  };

  const showSignUpButton = async () => {
    return new Promise((resolve) => {
      if (!usePassword) setUsePassword(true);
      setTimeout(() => {
        resolve(true);
      }, 100);
    }).then(() => {
      if (!isReadySignUp) setIsReadySignUp(true);
    });
  };

  useEffect(() => {
    const fetchToken = async () => {
      if (process.env.NEXT_PUBLIC_AUTH_TOKEN_SERVER_URL) {
        const response = await axios.post(
          process.env.NEXT_PUBLIC_AUTH_TOKEN_SERVER_URL,
        );
        setAuthToken(response.data.data.token);
      }
    };

    fetchToken();
  }, []);

  return (
    <div className={`${styles.contentWrap} noDrag`}>
      <h1 className={styles.title}>SIGN UP</h1>
      <div className="underlineInputWrap">
        <input
          type="text"
          name="email"
          placeholder="이메일을 입력해 주세요."
          autoFocus={!useEmail ? true : false}
          readOnly={useEmail ? true : false}
          onChange={emailHandler}
        />
        <p hidden={useEmail ? true : false}></p>

        {!useEmail ? (
          <button
            className={styles.checkButton}
            onClick={useEmailHandler}
            disabled={checkEmail ? false : true}
          >
            사용하기
          </button>
        ) : null}
      </div>

      {useEmail ? (
        <div className="underlineInputWrap">
          <input
            type="text"
            name="name"
            placeholder="닉네임을 입력해 주세요."
            onChange={nameHandler}
            readOnly={useName ? true : false}
          />
          <p hidden={useName ? true : false}></p>

          {!useName ? (
            <button
              className={styles.checkButton}
              onClick={useNameHandler}
              disabled={checkName ? false : true}
            >
              사용하기
            </button>
          ) : null}
        </div>
      ) : null}

      {useName ? (
        <div className="underlineInputWrap">
          <input
            type="password"
            name="password"
            placeholder="패스워드를 입력해 주세요."
            onChange={passwordHandler}
            readOnly={usePassword ? true : false}
          />
          <p hidden={usePassword ? true : false}></p>

          {!usePassword ? (
            <button
              className={styles.checkButton}
              onClick={showSignUpButton}
              disabled={checkPassword ? false : true}
            >
              사용하기
            </button>
          ) : null}
        </div>
      ) : null}
      <div className={styles.buttonWrap}>
        <button
          className={`${styles.signUpButton} ${
            useEmail && usePassword && useName && isReadySignUp
              ? 'opacity1'
              : 'opacity0'
          }`}
          hidden={useEmail && usePassword && useName ? false : true}
        >
          회원가입
        </button>

        <Link className={styles.smallText} href={'/sign-in'}>
          이미 회원이신가요?
        </Link>
      </div>
    </div>
  );
}
