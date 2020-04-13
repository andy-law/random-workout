const WORKOUT_KEY = 'COMPLETE_WORKOUT';
const STRAVA_KEY = 'STRAVA';

export const setWorkout = (exercises, workoutTime) => {
  try {
    localStorage.setItem(WORKOUT_KEY, JSON.stringify({exercises, workoutTime}));
  } catch (err) {
    console.warn(`LocalStorage hasn't worked, ${err}`);
  }
};

export const getWorkout = () => {
  const workoutData = localStorage.getItem(WORKOUT_KEY);

  return !!workoutData ? JSON.parse(workoutData) : null;
};

export const clearWorkout = () => {
  localStorage.removeItem(WORKOUT_KEY);
};

export const getStravaTokens = () => {
  const strava = localStorage.getItem(STRAVA_KEY);

  return !!strava ? JSON.parse(strava) : null; 
};

export const setStravaTokens = (tokens) => {
  debugger;
  try {
    localStorage.setItem(STRAVA_KEY, JSON.stringify(tokens));
  } catch (err) {
    console.warn(`LocalStorage hasn't worked, ${err}`);
  }
};