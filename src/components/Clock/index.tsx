/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { timeDefaultValue } from '../../constants';
import { Container } from './style';
import { useDebounce } from '../../hooks';


const Clock: React.FC = () => {
  let dateNow = new Date();
  const [time, setTime] = useState(timeDefaultValue);
  const debouncedValue = useDebounce<Date>(dateNow, 1000);

  const handleClock = () => {
    const time = {
      hour: dateNow.getHours(),
      minutes: dateNow.getSeconds(),
    };

    setTime(time);
  };

  useEffect(handleClock, [dateNow, debouncedValue]);

  return <Container time={time} />;
};

export default Clock;
