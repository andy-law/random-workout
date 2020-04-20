import React, { useState, useEffect } from 'react';
import { Modal } from 'rsuite';

import { getWorkouts } from './utils/workouts';
import { getEquipment } from './utils/equipment';
import { setWorkout, getWorkout, clearWorkout } from './utils/local-storage';
import useStrava from './hooks/useStrava';

import CompletedWorkout from './components/completed-workout';
import IntroPanel from './components/intro-panel';
import Equipment from './components/equipment';
import ExercisePanel from './components/exercise-panel';
import Footer from './components/footer';

import 'rsuite/dist/styles/rsuite-dark.css';
import './app.css';

function App() {
  const allEquipment = getEquipment();
  const [availableEquipment, setAvailableEquipment] = useState(allEquipment.map(e => e.value));
  const [exercises, setExercises] = useState([]);
  const [hasWorkout, setHasWorkout] = useState(false);
  const [hasStravaModal, setHasStravaModal] = useState(false);
  const [workoutTime, setWorkoutTime] = useState({
    start: Date.now(),
    end: Date.now(),
  });
  const { fetchTokens, requestAuth, hasValidToken, postActivity } = useStrava();

  const handleResetApp = () => setExercises([]);

  const handleGenerateWorkout = () => {
    const workouts = getWorkouts(availableEquipment);

    setExercises(workouts);
  };

  const handleEquipmentChange = (value) => setAvailableEquipment(value);

  const handleSubmitToStrava = (values) => {
    postActivity(values);
  };

  const onCloseStravaModal = () => setHasStravaModal(false);

  const handleSendToStrava = (workoutTime) => {
    setWorkout(exercises, workoutTime);
    setWorkoutTime(workoutTime);
    if (hasValidToken()) {
      setHasStravaModal(true);
    } else {
      requestAuth();
    }
  };

  useEffect(() => {
    setHasWorkout(!!exercises && !!exercises.length);
  }, [exercises, exercises.length]);

  /* eslint-disable */
  useEffect(() => {
    const savedWorkout = getWorkout();
    if (savedWorkout) {
      fetchTokens();
      setExercises(savedWorkout.exercises);
      setWorkoutTime(savedWorkout.workoutTime);
      setHasStravaModal(true);
      clearWorkout();
    }
  }, []);
  /* eslint-enable */

  return (
    <div className="app">
      <header className="app-header">
        <h1>Generate a random strength routine</h1>
      </header>
      <div className="app-body">
        <Equipment
          hasWorkout={hasWorkout}
          availableEquipment={availableEquipment}
          handleEquipmentChange={handleEquipmentChange}
        />
        { !hasWorkout && <IntroPanel /> }
        { hasWorkout && <ExercisePanel exercises={exercises} /> }
      </div>
      <Footer
        hasWorkout={hasWorkout}
        handleResetApp={handleResetApp}
        handleSendToStrava={handleSendToStrava}
        handleGenerateWorkout={handleGenerateWorkout}
      />

      <Modal show={hasStravaModal} onHide={onCloseStravaModal} backdrop={true}>
        <Modal.Header>
          <Modal.Title>Workout details</Modal.Title>
        </Modal.Header>
        <CompletedWorkout exercises={exercises} workoutTime={workoutTime} onSubmit={handleSubmitToStrava} />
      </Modal>
    </div>
  );
}

export default App;
