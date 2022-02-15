import React, { useContext } from 'react';
import { ShelfContext } from '../../context';
import { ButtonProps } from '../../interfaces';
import { Container } from './style';

export const Button: React.FC<ButtonProps> = ({ button, index }) => {
  const { buttonIsActive, setButtonIsActive } = useContext(ShelfContext);

  const handleButtonClick = () => {
    if (index === 0) {
      setButtonIsActive({
        alpha: true,
        color: false,
        size: false,
        date: false,
      });
    }
    if (index === 1) {
      setButtonIsActive({
        alpha: false,
        color: true,
        size: false,
        date: false,
      });
    }
    if (index === 2) {
      setButtonIsActive({
        alpha: false,
        color: false,
        size: true,
        date: false,
      });
    }

    if (index === 3) {
      setButtonIsActive({
        alpha: false,
        color: false,
        size: false,
        date: true,
      });
    }
  };

  return (
    <Container
      onClick={handleButtonClick}
      isActive={
        index === 0
          ? buttonIsActive.alpha
          : index === 1
          ? buttonIsActive.color
          : index === 2
          ? buttonIsActive.size
          : buttonIsActive.date
      }
    >
      <img src={button.src} alt={button.alt} />
    </Container>
  );
};
