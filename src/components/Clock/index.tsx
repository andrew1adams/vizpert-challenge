import { useState } from 'react';
import { timeDefaultValue } from '../../constants';
import { Container } from './style';

interface ClockProps {
  timeZone?: number;
}

const Clock: React.FC<ClockProps> = ({ timeZone = -3 }) => {
  const [time, setTime] = useState(timeDefaultValue);
  const dateNow = new Date();

  const handleClock = () => {
    const time = {
      hour: dateNow.getHours(),
      minutes: dateNow.getMinutes(),
    };

    setTime(time);
  };

  return <Container />;
};

export default Clock;
