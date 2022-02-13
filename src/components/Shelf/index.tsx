import { useContext } from 'react';
import { Book } from '..';
import { ShelfContext } from '../../context';
import { Container } from './style';

export const Shelf = () => {
  const { booksSorted, sortOrder } = useContext(ShelfContext);

  return (
    <>
      <Container
        className={`shelf firstShelf ${sortOrder === 'reverse' && 'reverse'}`}
      >
        {booksSorted.firstShelf.map((book, index) => {
          return (
            book && (
              <Book
                src={book.src}
                alt={book.alt}
                key={book.id}
                listName="firstShelf"
                index={index}
                id={book.id}
              />
            )
          );
        })}
      </Container>
      <Container
        className={`shelf secondShelf ${sortOrder !== 'reverse' && 'reverse'}`}
      >
        {booksSorted.secondShelf.map((book, index) => {
          return (
            book && (
              <Book
                src={book.src}
                alt={book.alt}
                key={book.id}
                listName="secondShelf"
                index={index}
                id={book.id}
              />
            )
          );
        })}
      </Container>
    </>
  );
};
