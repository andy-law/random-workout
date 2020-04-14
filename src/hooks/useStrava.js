import { useState } from 'react';
import { getStravaTokens, setStravaTokens } from '../utils/local-storage';

const useStrava = () => {
  const clientId = 9440;
  const [stravaTokens, setStravaTokens] = useState(getStravaTokens());

  const hasValidToken = () => {
    if (!stravaTokens) {
      return;
    }
    const hasExpired = new Date(stravaTokens.expiresAt).getTime() > Date.now();

    return !hasExpired;
  };

  const fetchStravaToken = () => {
    let grantType = 'authorization_code';
    if (stravaTokens) {
      if (hasValidToken()) {
        return;
      } else {
        grantType = 'refresh_token';
      }
    }
    const urlObj = new URL(window.location.href);
    const code = urlObj.searchParams.get('code');
    fetch(
      `https://www.strava.com/oauth/token?client_id=${clientId}&code=${code}&grant_type=${grantType}`,
      { method: 'POST', }
    ).then((response) => {
      response.json().then((data) => {
        const accessToken = data.access_token;
        const refreshToken = data.refresh_token;
        const expiresAt = data.expires_at;
        setStravaTokens({
          accessToken,
          refreshToken,
          expiresAt
        });
      });
    });
  };

  const requestStravaAproval = () => {
    const redirectUri = window.location.origin;
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&approval_prompt=auto&scope=activity:write`;
  };

  return {
    hasValidToken,
    requestAuth: requestStravaAproval,
    fetchTokens: fetchStravaToken
  };
};

export default useStrava;
