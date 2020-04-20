import React, { useEffect } from 'react';
import { Button } from 'rsuite';

import useWorkoutTime from '../../hooks/useWorkoutTime';
import { getWorkout } from '../../utils/local-storage';
import Timer from '../timer';

import './footer.css';

const AppFooter = ({
  hasWorkout, handleResetApp, handleSendToStrava, handleGenerateWorkout
}) => {
  const {
    workoutTime,
    hasWorkoutInProgress,
    hasWorkoutFinished,
    resetWorkoutTime,
    setWorkoutStarted,
    setWorkoutFinished,
    setTimeFromSavedValues,
  } = useWorkoutTime(hasWorkout);

  const reset = () => {
    resetWorkoutTime();
    handleResetApp();
  };

  /* eslint-disable */
  useEffect(() => {
    const savedWorkout = getWorkout();

    if (savedWorkout) {
      setTimeFromSavedValues(savedWorkout.workoutTime);
    }
  }, []);
  /* eslint-enable */

  return <footer className="footer">
    {
      !hasWorkout &&
      <Button appearance="primary" onClick={handleGenerateWorkout}>Generate workout</Button>
    }
    {
      hasWorkout && !hasWorkoutInProgress && !hasWorkoutFinished &&
      <>
        <Button className="app-secondary-button" onClick={handleGenerateWorkout} appearance="ghost">Generate new workout</Button>
        <Button appearance="primary" onClick={setWorkoutStarted}>Start workout</Button>
      </>
    }
    {
      hasWorkout && hasWorkoutInProgress && !hasWorkoutFinished &&
      <>
        <Timer startTime={workoutTime.start} />
        <Button appearance="primary" onClick={setWorkoutFinished}>Complete workout</Button>
      </>
    }
    {
      hasWorkout && hasWorkoutFinished &&
      <>
        <Button className="app-secondary-button" onClick={reset} appearance="ghost">Reset and start again</Button>
        <Button onClick={() => handleSendToStrava(workoutTime)} appearance="primary">Upload workout to Strava</Button>
      </>
    }
  </footer>
};

export default AppFooter;
