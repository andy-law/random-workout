import React, { useState } from 'react';
import {Panel, Button, Checkbox, CheckboxGroup} from 'rsuite';

import { getWorkouts } from './utils/workouts';
import { getEquipment } from './utils/equipment';

import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <h1>Random strength routine creator</h1>
      </header>
      <div className="App-body">
        <div className="App-equipment">
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
          <>
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
          </>
        }
      </div>
      <footer className="App-footer">
        <Button onClick={generateWorkout}>Generate workout</Button> 
      </footer>
    </div>
  );
}

export default App;
