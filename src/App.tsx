import { useState } from 'react';
import { Button } from './components/index';
import style from './App.module.css';
import { Block } from './components/Block/Block';
import { Circle } from './components/Circle/Circle';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleAnimate = () => {
    setAnimate(true);

    // Reset the animation after a delay (e.g., 2 seconds)
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  };

  return (
    <>
      <div className={style.wrapper}>
        <Block text="1" animate />
        <Block text="2" />
        <Circle />
      </div>
      <div className={style.footer}>
        <Button
          text="start"
          isActive={isActive}
          setIsActive={setIsActive}
          handleAnimate={handleAnimate}
        />
      </div>
    </>
  );
}

export default App;
