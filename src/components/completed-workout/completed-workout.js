import React, { useState } from 'react';
import { Input, InputNumber, Button, Form } from 'rsuite';

const CompletedWorkout = ({exercises}) => {
  const [numSets, setNumSets] = useState(1);

  // set number of sets
  // set number of reps/seconds for each exercise
  // set number of

  const handleSetsChange = (value) => {
    setNumSets(parseInt(value, 10));
  };

  console.log(exercises);
  // console.log(new Array(numSets).fill('').map(_d => `${exercise}-set-${index}`))

  return <Form>
    <label>
      How many sets did you complete?
      <InputNumber onChange={handleSetsChange} value={numSets} name="sets" defaultValue={numSets} min={0} max={5} />
    </label>
    <>
      <p>What did you complete for each set for each exercise?</p>
      {
        exercises.map((exercise, index) => (
          <label key={index}>
            {exercise.workout.title}
            <Input name={`${exercise}-details`} />
          </label>
        ))
      }
    </>
    <Button appearance="primary">Format Strava submission</Button>
  </Form>
};

export default CompletedWorkout;
