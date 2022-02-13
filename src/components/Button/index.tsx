import React, { useContext } from 'react';
import { ShelfContext } from '../../context';
import { ButtonProps } from '../../interfaces';
import { Container } from './style';

export const Button: React.FC<ButtonProps> = ({ button, index }) => {
  const { buttonIsActive, setButtonIsActive } = useContext(ShelfContext);

  const handleButtonClick = () => {
    if (index === 0) {
      setButtonIsActive({
        first: true,
        second: false,
        third: false,
      });
    }
    if (index === 1) {
      setButtonIsActive({
        first: false,
        second: true,
        third: false,
      });
    }
    if (index === 2) {
      setButtonIsActive({
        first: false,
        second: false,
        third: true,
      });
    }
  };

  return (
    <Container
      onClick={handleButtonClick}
      isActive={
        index === 0
          ? buttonIsActive.first
          : index === 1
          ? buttonIsActive.second
          : buttonIsActive.third
      }
    >
      <img src={button.src} alt={button.alt} />
    </Container>
  );
};
