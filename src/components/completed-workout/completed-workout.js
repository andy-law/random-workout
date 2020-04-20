import React, { useState } from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel } from 'rsuite';

import './completed-workout.css';

const CompletedWorkout = ({exercises, workoutTime, onSubmit}) => {
  const duration = (workoutTime.end - workoutTime.start);
  const secs = Math.floor(duration * 0.001) % 60;
  const mins = Math.floor(duration / (1000 * 60)) % 60;
  const hours = Math.floor(duration / (1000 * 60 * 60)) % 60;
  const description = exercises
  .map(({workout}) => workout.title)
  .reduce((acc, curr) => (`${acc}
${curr}`), `3 sets of:`)
  const [formValues, setFormValues] = useState({
    workoutTitle: 'Strength workout',
    duration: `${('0' + hours).slice(-2)}:${('0' + mins).slice(-2)}:${('0' + secs).slice(-2)}`,
    description: `${description}
Workout generated with random workout generator - https://andy-law.github.io/random-workout/`
  });

  const handleSubmit = () => {
    const hours = parseInt(formValues.duration.substring(0, 2), 10);
    const mins = parseInt(formValues.duration.substring(3, 5), 10);
    const secs = parseInt(formValues.duration.substring(6, 8), 10);
    const elapsedTime = secs + (mins * 60) + (hours * 60 * 60);

    onSubmit({
      name: formValues.workoutTitle,
      type: 'Workout',
      start_date_local: new Date(workoutTime.start).toISOString(),
      elapsed_time: elapsedTime,
      description: formValues.description,
    });
  };

  const handleFormChange = (values) => setFormValues(values);

  return (
    <Form fluid onSubmit={handleSubmit} onChange={handleFormChange} formValue={formValues}>
      <FormGroup className="workout-title">
        <ControlLabel>Give your workout a title</ControlLabel>
        <FormControl name="workoutTitle" />
      </FormGroup>
      <FormGroup className="workout-title">
        <ControlLabel>Duration of workout (hh:mm:ss)</ControlLabel>
        <FormControl name="duration" />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Description</ControlLabel>
        <FormControl name="description" componentClass="textarea" />
      </FormGroup>
      <Button type="submit" className="workout-submit" appearance="primary">Send to Strava</Button>
    </Form>
  );
};

export default CompletedWorkout;
