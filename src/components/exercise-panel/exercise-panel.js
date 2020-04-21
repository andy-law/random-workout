import React, { useState } from 'react';
import {Panel, PanelGroup, Icon, IconButton, ButtonToolbar} from 'rsuite';

import { getWorkoutEquipment } from '../../utils/workout-equipment';
import VideoLightbox from '../video-lightbox';

import './exercise-panel.css'

const ExercisePanel = ({exercises}) => {
  const [videoId, setVideoId] = useState(null);

  const handleVideoSelected = (videoId) => setVideoId(videoId);
  const handleLightboxClose = () => setVideoId(null);

  return <>
    <PanelGroup bordered>
      {
        exercises.map(({title, workout}) => {
          if (!workout) {
            return null;
          }
          return <Panel key={title} header={title} bordered>
            <h2 className='exercise-workout-title'>{workout.title}</h2>
            <p className='exercise-workout-equipment'>Equipment needed: { getWorkoutEquipment(workout) }</p>
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
            <div className='exercise-workout-details'>
              <div className='exercise-workout-instructions'>
                <h3 className='exercise-workout-instructions-heading'>Instructions:</h3>
                <p>{workout.instructions}</p>
                <p>Target: {workout.target}</p>
              </div>
              {
                !!workout.image &&
                <img className='exercise-workout-img' src={workout.image} alt={workout.title} />
              }
            </div>
          </Panel>
        })
      }
    </PanelGroup>
    <VideoLightbox videoId={videoId} screenWidth={window.innerWidth} onClose={handleLightboxClose} />
  </>
};

export default ExercisePanel;
