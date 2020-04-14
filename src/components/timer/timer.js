import React, { useState, useEffect } from 'react';

import './timer.css';

const Timer = ({startTime}) => {
  const [elapsedSecs, updateElapsedSecs] = useState('00');
  const [elapsedMins, updateElapsedMins] = useState('00');
  const [elapsedHours, updateElapsedHours] = useState('00');

  useEffect(() => {
    const id = setInterval(() => {
      const diff = (Date.now() - startTime);
      const secs = Math.floor(diff * 0.001) % 60;
      const mins = Math.floor(diff / (1000 * 60)) % 60;
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 60;
      updateElapsedSecs(('0' + secs).slice(-2));
      updateElapsedMins(('0' + mins).slice(-2));
      updateElapsedHours(('0' + hours).slice(-2));
    }, 250);

    return function cleanup () {
      clearInterval(id);
    }
  }, [startTime]);

  return <div className="timer">{ elapsedHours }:{ elapsedMins }:{ elapsedSecs }</div>
};

export default Timer;
