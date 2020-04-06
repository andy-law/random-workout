import React, { useState } from 'react';
import {Panel, PanelGroup, Button, TagPicker, Icon, IconButton, ButtonToolbar} from 'rsuite';

import { getWorkouts } from './utils/workouts';
import { getEquipment } from './utils/equipment';

import VideoLightbox from './components/video-lightbox';

import 'rsuite/dist/styles/rsuite-dark.css';
import './app.css';

function App() {
  const allEquipment = getEquipment();
  const [availableEquipment, setAvailableEquipment] = useState(allEquipment.map(e => e.value));
  const [exercises, setExercises] = useState([]);
  const [videoId, setVideoId] = useState(null);
  

  const generateWorkout = () => {
    const workouts = getWorkouts(availableEquipment);

    setExercises(workouts);
  }

  const handleEquipmentChange = (value) => {
    setAvailableEquipment(value);
  }

  const handleVideoSelected = (videoId) => {
    console.log('handleVideoSelected', videoId);
    setVideoId(videoId);
  }

  const handleLightboxClose = () => {
    console.log('handleLightboxClose');
    setVideoId(null);
  }
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>Generate a random strength routine</h1>
      </header>
      <div className="app-body">
        <p>What equipment do you have available to you?</p>
        <TagPicker
          block
          data={allEquipment}
          defaultValue={availableEquipment}
          className="app-equipment"
          placeholder="What equipment do you have available to you?"
          onChange={handleEquipmentChange}
        />
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
          !!exercises && !!exercises.length &&
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
        <Button onClick={generateWorkout}>Generate workout</Button> 
      </footer>
      <VideoLightbox videoId={videoId} onClose={handleLightboxClose} />
    </div>
  );
}

export default App;
