import React, { useState } from 'react';

import './timer.css';

const Timer = ({startTime}) => {
  const [elapsedSecs, updateElapsedSecs] = useState(0);

  React.useEffect(() => {
    const id = setInterval(() => updateElapsedSecs(Math.floor((Date.now() - startTime) * 0.001)), 100);

    return function cleanup () {
      clearInterval(id);
    }
  }, [startTime]);

  return <div className="timer">Elapsed time: { elapsedSecs } seconds</div>
};

export default Timer;