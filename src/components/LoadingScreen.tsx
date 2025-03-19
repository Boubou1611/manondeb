import { useState, useEffect } from 'react';
import '../LoadingScreen.css';
import gifImage from '/assets/images/Av1.gif';

const LoadingScreen = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    console.log('animate a changé :', animate);
  }, [animate]);

  const handleClick = () => {
    setAnimate(true);
    console.log('Clic détecté, animate:', true);
  };

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === 'fadeOut') {
      console.log('Animation terminée');
      onAnimationEnd();
    }
  };

  return (
    <>
      <div
        className={`loading-screen ${animate ? 'animate' : ''}`}
        onClick={handleClick}
        onAnimationEnd={handleAnimationEnd}
      >
        <h1>Open to work</h1>
      </div>
      <div className={`background-rectangle ${animate ? 'animate' : ''}`}>
        <img src={gifImage} alt="Background" />
      </div>
    </>
  );
};

export default LoadingScreen;
