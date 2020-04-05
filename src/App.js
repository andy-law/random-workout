import React, { useState } from 'react';
import {Panel, PanelGroup, Button, Checkbox, CheckboxGroup} from 'rsuite';

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

    console.log({workouts});
    setExercises(workouts);
  }

  const handleChange = (value) => {
    setAvailableEquipment(value);
  }
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>Random strength routine creator</h1>
      </header>
      <div className="app-body">
        <div className="app-equipment">
          <CheckboxGroup
            inline
            name="checkboxList"
            value={availableEquipment}
            onChange={handleChange}
          >
            {
              allEquipment.map(({label, value}) => (
                <Checkbox key={value} value={value}>{label}</Checkbox>
              ))
            }
          </CheckboxGroup>
        </div>
        {
          !!exercises && !!exercises.length &&
          <PanelGroup>
            {
              exercises.map(({title, workout}) => (
                <Panel key={title} header={`${title} - ${workout.title}`} collapsible bordered>
                  <p>{workout.instructions}</p>
                  <p>Equipment needed: {
                    workout.equipment.length 
                      ? workout.equipment.map((item) => allEquipment.find(({value}) => value === item).label).join(', ')
                      : 'None'
                  }</p>
                </Panel>
              ))
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
