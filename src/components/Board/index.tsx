import { Container } from './style';
import { lady, button } from '../../assets';
import { buttons } from '../../constants';
import { Button } from '../Button';
import { ShelfContext } from '../../context';
import { useContext } from 'react';

export const Board: React.FC = () => {
  const {
    handleAlphaSort,
    handleColorSort,
    handleSizeSort,
    handleDateSort,
    sortOrder,
    setSortOrder,
    buttonIsActive,
  } = useContext(ShelfContext);

  const handleOrganizeClick = () => {
    if (buttonIsActive.alpha) {
      if (sortOrder === 'alpha') {
        setSortOrder('reverse');
        handleAlphaSort();
      } else {
        setSortOrder('alpha');
        handleAlphaSort();
      }
    }
    if (buttonIsActive.color) {
      if (sortOrder === 'color') {
        setSortOrder('reverse');
        handleColorSort();
      } else {
        setSortOrder('color');
        handleColorSort();
      }
    }
    if (buttonIsActive.size) {
      if (sortOrder === 'size') {
        setSortOrder('reverse');
        handleSizeSort();
      } else {
        setSortOrder('size');
        handleSizeSort();
      }
    }
    if (buttonIsActive.date) {
      if (sortOrder === 'date') {
        setSortOrder('reverse');
        handleDateSort();
      } else {
        setSortOrder('date');
        handleDateSort();
      }
    }
  };

  return (
    <Container>
      <img src={lady} alt="Lady" />
      <div>
        <div className="sorter-wrapper">
          <h2>SORT BY</h2>
          <div>
            {buttons.map((button, index) => (
              <Button button={button} index={index} key={button.id} />
            ))}
          </div>
          <hr />
          <button onClick={handleOrganizeClick}>
            <span>ORGANIZER</span>
            <img src={button} alt="Button Organizer" />
          </button>
        </div>
      </div>
    </Container>
  );
};
