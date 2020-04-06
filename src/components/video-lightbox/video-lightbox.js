import React from 'react';
import {Modal} from 'rsuite';

import './video-lightbox.css';

const VideoLightbox = ({videoId, onClose}) => {
  return <Modal show={!!videoId} onHide={onClose} backdrop={true}>
    <Modal.Header />
    <iframe 
      className='lightbox-iframe'
      title="video"
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen={true}
      tabIndex='-1' 
    />
  </Modal>
};

export default VideoLightbox;