import { Container } from './style';
import { Shelf } from '../Shelf';

const Bookcase = () => {
  return (
    <Container>
      <div className="bookcase-wrapper">
        <Shelf />
      </div>
    </Container>
  );
};

export default Bookcase;
