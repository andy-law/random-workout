import React from 'react';
import {TagPicker} from 'rsuite';

import { getEquipment } from '../../utils/equipment';
import { getExercisesEquipment } from '../../utils/workout-equipment';

const Equipment = ({hasWorkout, exercises, availableEquipment, handleEquipmentChange}) => {
  const allEquipment = getEquipment();

  return hasWorkout
    ? <>
      <p>You'll need this equipment for the workout:</p>
      <ul>
        { getExercisesEquipment(exercises).map((equipment, index) => (<li key={`equipment-${index}`}>{equipment}</li>)) }
      </ul>
    </>
    : <>
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
};

export default Equipment;
