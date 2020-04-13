import React, { useState, useEffect } from 'react';
import {Panel, PanelGroup, Button, TagPicker, Icon, IconButton, ButtonToolbar, Modal} from 'rsuite';

import { getWorkouts } from './utils/workouts';
import { getEquipment } from './utils/equipment';
import { setWorkout, getWorkout, clearWorkout, getStravaTokens, setStravaTokens } from './utils/local-storage';
import useWorkoutTime from './hooks/useWorkoutTime';

import VideoLightbox from './components/video-lightbox';
import Timer from './components/timer';
import CompletedWorkout from './components/completed-workout';

import 'rsuite/dist/styles/rsuite-dark.css';
import './app.css';

const clientId = 0;

function App() {
  const allEquipment = getEquipment();
  const [availableEquipment, setAvailableEquipment] = useState(allEquipment.map(e => e.value));
  const [exercises, setExercises] = useState([]);
  const [videoId, setVideoId] = useState(null);
  const [hasWorkout, setHasWorkout] = useState(false);
  const [hasStravaModal, setHasStravaModal] = useState(false);
  const { 
    workoutTime,
    hasWorkoutInProgress,
    hasWorkoutFinished,
    resetWorkoutTime,
    setWorkoutStarted,
    setWorkoutFinished,
    setTimeFromSavedValues,
  } = useWorkoutTime(hasWorkout);

  const resetApp = () => {
    setExercises([]);
    resetWorkoutTime();
  };

  const generateWorkout = () => {
    const workouts = getWorkouts(availableEquipment);

    setExercises(workouts);
  };

  const handleEquipmentChange = (value) => setAvailableEquipment(value);

  const handleVideoSelected = (videoId) => setVideoId(videoId);

  const handleLightboxClose = () => setVideoId(null);

  const onCloseStravaModal = () => setHasStravaModal(false);

  const sendToStrava = () => {
    setWorkout(exercises, workoutTime);
    if (getStravaTokens()) {
      // TODO: check if token has expired and renew it
      setHasStravaModal(true);
    } else {
      const redirectUri = window.location.origin;
      window.location.href = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&approval_prompt=auto&scope=activity:write`;
    }
  };

  useEffect(() => {
    setHasWorkout(!!exercises && !!exercises.length);
  }, [exercises, exercises.length]);

  /* eslint-disable */
  useEffect(() => {
    const savedWorkout = getWorkout();
    console.log({savedWorkout});

    if (savedWorkout) {
      const urlObj = new URL(location.href);
      const code = urlObj.searchParams.get('code');
      const body = {
        client_id: clientId,
        client_secret: '',
        code,
        grant_type: 'authorization_code'
      };
      fetch(
        `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=2e414686c3cbb937543027b6a63887234179008c&code=${code}&grant_type=authorization_code`,
        {
          method: 'POST',
          body: JSON.stringify(body),
        }
      ).then((response) => {
        response.json().then((data) => {
          const accessToken = data.access_token;
          const refreshToken = data.refresh_token;
          const expiresAt = data.expires_at;
          setExercises(savedWorkout.exercises);
          setTimeFromSavedValues(savedWorkout.workoutTime);
          setHasStravaModal(true);
          setStravaTokens({
            accessToken,
            refreshToken,
            expiresAt
          });
          clearWorkout();
        });
      });
    }
  }, []);
  /* eslint-enable */

  return (
    <div className="app">
      <header className="app-header">
        <h1>Generate a random strength routine</h1>
      </header>
      <div className="app-body">
        {
          !hasWorkout &&
          <>
            <p>What equipment do you have available to you?</p>
            <TagPicker
              block
              data={allEquipment}
              defaultValue={availableEquipment}
              className="app-equipment"
              placeholder="What equipment do you have available to you?"
              onChange={handleEquipmentChange}
            />
          </>
        }
        {
          hasWorkout && 
          <>
            <p>You'll need this equipment for the workout:</p>
            <ul>
            {
                exercises
                  .map(({workout}) => workout.equipment.reduce((acc, curr) => (!!acc ? `${acc}/${curr}` : curr), ''))
                  .filter((equipment) => !!equipment)
                  .map((equipment, index) => (<li key={`equipment-${index}`}>{equipment}</li>))
              }
            </ul>
          </>
        }
        {
          (!exercises || !exercises.length) &&
          <Panel header="" bordered>
            <p>This app generates a workout for you, based loosely on the "Strength Training for Ultrarunning" episodes of <a href="https://jasonkoop.com/koopcast" target="_blank" rel="noreferrer noopener">Koopcast</a></p>
            <p>A workout will contain exercises in the following categories:</p>
            <ul>
              <li>Push</li>
              <li>Pull</li>
              <li>Hinge</li>
              <li>Squat</li>
              <li>Carry</li>
              <li>Lunge</li>
              <li>Plank</li>
            </ul>
            <p>To generate a workout, simply select the equipment that you have available to you and click the "Generate Workout" button at the bottom</p>
            <p>Aim to do 3-5 sets of the workout with 6-12 reps of each exercise unless otherwise specified.</p>
          </Panel>
        }
        {
          hasWorkout &&
          <PanelGroup bordered>
            {
              exercises.map(({title, workout}) => {
                return !!workout 
                  ? <Panel key={title} header={title} bordered>
                    <h2 className='app-workout-title'>{workout.title}</h2>
                    <p className='app-workout-equipment'>Equipment needed: {
                      workout.equipment.length 
                        ? workout.equipment.map((item) => allEquipment.find(({value}) => value === item).label).join(', ')
                        : 'None'
                    }</p>
                    <ButtonToolbar>
                      {
                        !!workout.videoId && 
                        <IconButton icon={<Icon icon='youtube-play' />} onClick={() => handleVideoSelected(workout.videoId)}>View Video</IconButton>
                      }
                      {
                        !!workout.link &&
                      <IconButton icon={<Icon icon='web' />} href={workout.link} target='_blank'>View Details</IconButton>
                      }
                    </ButtonToolbar>
                    <div className='app-workout-details'>
                      <div className='app-workout-instructions'>
                        <h3 className='app-workout-instructions-heading'>Instructions:</h3>
                        <p>{workout.instructions}</p>
                      </div>
                      {
                        !!workout.image &&
                        <img className='app-workout-img' src={workout.image} alt={workout.title} />
                      }
                    </div>
                  </Panel>
                  : null
              })
            }
          </PanelGroup>
        }
      </div>
      <footer className="app-footer">
        {
          !hasWorkout &&
          <Button appearance="primary" onClick={generateWorkout}>Generate workout</Button> 
        }
        {
          !!hasWorkout && !hasWorkoutInProgress && !hasWorkoutFinished &&
          <>
            <Button className="app-secondary-button" onClick={generateWorkout} appearance="ghost">Generate new workout</Button>
            <Button appearance="primary" onClick={setWorkoutStarted}>Start workout</Button>
          </>
        }
        {
          !!hasWorkout && hasWorkoutInProgress && !hasWorkoutFinished &&
          <>
            <Timer startTime={workoutTime.start} />
            <Button appearance="primary" onClick={setWorkoutFinished}>Complete workout</Button>
          </>
        }
        {
          !!hasWorkout && hasWorkoutFinished &&
          <>
            <Button className="app-secondary-button" onClick={resetApp} appearance="ghost">Reset and start again</Button>
            <Button onClick={sendToStrava} appearance="primary">Upload workout to Strava</Button>
          </>
        }
      </footer>
      <VideoLightbox videoId={videoId} screenWidth={window.innerWidth} onClose={handleLightboxClose} />
      <Modal show={hasStravaModal} onHide={onCloseStravaModal} backdrop={true}>
        <Modal.Header>
          <Modal.Title>Workout details</Modal.Title>
        </Modal.Header>
        <CompletedWorkout exercises={exercises} workoutTime={workoutTime} />
      </Modal>
    </div>
  );
}

export default App;
