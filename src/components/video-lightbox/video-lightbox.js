import React from 'react';
import {Modal} from 'rsuite';

import './video-lightbox.css';

const VideoLightbox = ({videoId, screenWidth, onClose}) => {
  const videoWidth = screenWidth < 600 ? screenWidth - 40 : 560;
  const videoHeight = videoWidth * 0.5625;

  return <Modal show={!!videoId} onHide={onClose} backdrop={true}>
    <Modal.Header />
    <iframe 
      className='lightbox-iframe'
      title="video"
      width={videoWidth}
      height={videoHeight}
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen={true}
      tabIndex='-1' 
    />
  </Modal>
};

export default VideoLightbox;