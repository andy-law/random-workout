import React from 'react';
import {Panel} from 'rsuite';

const IntroPanel = () => (
  <Panel header="" bordered>
    <p>This app generates a workout for you, based loosely on the "Strength Training for Ultrarunning" episodes of <a href="https://jasonkoop.com/koopcast" target="_blank" rel="noreferrer noopener">Koopcast</a>, with the addition of Lunge and Plank exercises</p>
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
);

export default IntroPanel;
