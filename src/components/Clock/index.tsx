import { useEffect, useState } from 'react';
import { timeDefaultValue } from '../../constants';
import { Container } from './style';
import { useDebounce } from '../../hooks';

const Clock: React.FC = () => {
  const [time, setTime] = useState(timeDefaultValue);
  const debouncedValue = useDebounce<Date>(new Date(), 1000);

  const handleClock = () => {
    const getTime = {
      hour: new Date().getHours(),
      minutes: new Date().getMinutes(),
    };

    setTime(getTime);
  };

  useEffect(handleClock, [debouncedValue]);

  return <Container time={time} />;
};

export default Clock;
