import { FC, useEffect, useState } from 'react';
import style from './Button.module.css';

interface IButton {
  text: string;
  isActive: boolean;
  setIsActive: (arg: boolean) => void;
  handleAnimate: () => void;
}

export const Button: FC<IButton> = ({
  text,
  isActive,
  setIsActive,
  handleAnimate,
}) => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    let interval: number;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (isActive && seconds === 0) {
      setIsActive(false);
      setSeconds(5);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, seconds, setIsActive]);

  const handleStart = () => {
    setIsActive(true);
    handleAnimate();
  };

  return (
    <button className={style.button} onClick={handleStart} disabled={isActive}>
      {isActive ? seconds : text}
    </button>
  );
};
