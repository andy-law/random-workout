import { useState } from 'react';
import { getStravaTokens, setStravaTokens } from '../utils/local-storage';

console.log('process.env', process.env);

const useStrava = () => {
  const clientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
  const [stravaTokens, setTokens] = useState(getStravaTokens());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccessStatus, setSubmitSuccessStatus] = useState('');

  const resetStravaStatus = () => {
    setSubmitSuccessStatus('');
  }

  const hasValidToken = () => {
    if (!stravaTokens || !stravaTokens.accessToken) {
      return;
    }
    const date = parseInt(`${stravaTokens.expiresAt}000`, 10);
    const hasExpired = new Date(date).getTime() < Date.now();

    return !hasExpired;
  };

  const fetchStravaToken = () => {
    let grantType = 'authorization_code';
    if (stravaTokens && stravaTokens.accessToken) {
      if (hasValidToken()) {
        return;
      } else {
        grantType = 'refresh_token';
      }
    }
    const urlObj = new URL(window.location.href);
    const code = urlObj.searchParams.get('code');
    const clientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;
    fetch(
      `https://www.strava.com/oauth/token?client_id=${clientId}&code=${code}&client_secret=${clientSecret}&grant_type=${grantType}`,
      { method: 'POST', }
    ).then((response) => {
      response.json().then((data) => {
        const accessToken = data.access_token;
        const refreshToken = data.refresh_token;
        const expiresAt = data.expires_at;
        const token = {
          accessToken,
          refreshToken,
          expiresAt
        };
        setStravaTokens(token);
        setTokens(token);
      });
    });
  };

  const requestStravaAproval = () => {
    const redirectUri = window.location.href;
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&approval_prompt=auto&scope=activity:write`;
  };

  const postActivity = (activity) => {
    setIsSubmitting(true);
    const formData = new FormData();
    Object.keys(activity).forEach(key => formData.append(key, activity[key]));

    fetch(
      `https://www.strava.com/api/v3/activities`,
      {
        method: 'POST',
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${stravaTokens.accessToken}`,
          contentType: 'application/x-www-form-urlencoded',
        },
        body: formData
      }
    ).then((response) => {
      response.json().then((data) => {
        console.log({data});
        setIsSubmitting(false);
        setSubmitSuccessStatus('success');
      }).catch(() => {
        setSubmitSuccessStatus('error');
      })
    }).catch(() => {
      setSubmitSuccessStatus('error');
    })
  }

  return {
    hasValidToken,
    requestAuth: requestStravaAproval,
    fetchTokens: fetchStravaToken,
    postActivity,
    isSubmitting,
    submitSuccessStatus,
    resetStravaStatus
  };
};

export default useStrava;
