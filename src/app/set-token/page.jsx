'use client';

import { useEffect } from 'react';
import axios from 'axios';

export default function SetToken() {
  // useEffect(() => {
  //   const queryParams = new URLSearchParams(window.location.search);
  //   const tokens = {
  //     sub: queryParams.get('sub'),
  //     email: queryParams.get('email'),
  //   };
  //   const setTokens = async () => {
  //     const response = await axios
  //       .post(`/auth/oauth/setTokens`, tokens)
  //       .then((res) => {
  //         location.href = '/';
  //       });
  //   };

  //   setTokens();
  // }, []);

  return <></>;
}
