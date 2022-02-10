import { books } from '../../constants';
import { Container } from './style';

const Bookcase = () => {
  return (
    <Container>
      <div className="bookcase-wrapper">
        <div className="shelf firstShelf">
          {books.firstShelf.map((book) => (
            <img src={book.src} alt={book.alt} key={book.id} />
          ))}
        </div>
        <div className="shelf secondShelf reverse-order">
          {books.secondShelf.map((book) => (
            <img src={book.src} alt={book.alt} key={book.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Bookcase;
