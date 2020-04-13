import { useState, useEffect } from 'react';

const useWorkoutTime = (hasWorkout) => {
  const [workoutTime, updateWorkoutTime] = useState(null);
  const [hasWorkoutInProgress, setHasWorkoutInProgress] = useState(false);
  const [hasWorkoutFinished, setHasWorkoutFinished] = useState(false);

  const resetWorkoutTime = () => {
    updateWorkoutTime(null);
  }

  const setWorkoutStarted = () => {
    updateWorkoutTime({
      start: Date.now()
    });
  }

  const setWorkoutFinished = () => {
    updateWorkoutTime({
      ...workoutTime,
      end: Date.now(),
    });
  };

  const setTimeFromSavedValues = (savedValues) => {
    updateWorkoutTime(savedValues);
  };

  useEffect(() => {
    setHasWorkoutInProgress(hasWorkout && workoutTime && workoutTime.start && !workoutTime.end);
    setHasWorkoutFinished(hasWorkout && workoutTime && workoutTime.start && workoutTime.end);
  }, [hasWorkout, workoutTime]);

  return {
    workoutTime,
    hasWorkoutInProgress,
    hasWorkoutFinished,
    resetWorkoutTime,
    setWorkoutStarted,
    setWorkoutFinished,
    setTimeFromSavedValues,
  };
};

export default useWorkoutTime;