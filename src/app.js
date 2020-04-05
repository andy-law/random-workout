import React, { useState } from 'react';
import {Panel, PanelGroup, Button, TagPicker} from 'rsuite';

import { getWorkouts } from './utils/workouts';
import { getEquipment } from './utils/equipment';

import 'rsuite/dist/styles/rsuite-default.css';
import './app.css';

function App() {
  const allEquipment = getEquipment();
  const [availableEquipment, setAvailableEquipment] = useState(allEquipment.map(e => e.value));
  const [exercises, setExercises] = useState([]);
  

  const generateWorkout = () => {
    const workouts = getWorkouts(availableEquipment);

    setExercises(workouts);
  }

  const handleEquipmentChange = (value) => {
    setAvailableEquipment(value);
  }
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>Random strength routine creator</h1>
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
          </Panel>
        }
        {
          !!exercises && !!exercises.length &&
          <PanelGroup bordered>
            {
              exercises.map(({title, workout}) => {
               return !!workout ? <Panel key={title} header={`${title} - ${workout.title}`} collapsible bordered>
                  <p>{workout.instructions}</p>
                  <p>Equipment needed: {
                    workout.equipment.length 
                      ? workout.equipment.map((item) => allEquipment.find(({value}) => value === item).label).join(', ')
                      : 'None'
                  }</p>
                </Panel> : null
              })
            }
          </PanelGroup>
        }
      </div>
      <footer className="app-footer">
        <Button onClick={generateWorkout}>Generate workout</Button> 
      </footer>
    </div>
  );
}

export default App;
