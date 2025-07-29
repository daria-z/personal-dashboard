import { useEffect, useRef } from 'react';
import './Video.css';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        video.srcObject = stream;
      } catch (err) {
        console.error('Ошибка доступа к веб-камере:', err);
      }
    };

    startVideo();

    return () => {
      if (video && video.srcObject) {
        video.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} className="video-element" autoPlay />
    </div>
  );
};

export default Video;
