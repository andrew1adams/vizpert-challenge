import { useState } from 'react';
import { Book } from '..';
import { books } from '../../constants';
import { ShelfContext } from '../../context';
import { IBooks, IReorderBooks } from '../../interfaces';
import { Container } from './style';
import produce from 'immer';

export const Shelf = () => {
  const [booksSorted, setBookSorted] = useState<IBooks>(books);

  const reorderBooks = ({
    fromList,
    toList,
    from,
    to,
  }: IReorderBooks): void => {
    setBookSorted(
      produce(booksSorted, (arrayDraft) => {
        const verifyFromList =
          fromList === 'firstShelf' ? 'firstShelf' : 'secondShelf';
        const verifyToList =
          toList === 'firstShelf' ? 'firstShelf' : 'secondShelf';

        const dragged = arrayDraft[verifyFromList][from];

        arrayDraft[verifyFromList].splice(from, 1);
        arrayDraft[verifyToList].splice(to, 0, dragged);
      })
    );
  };

  return (
    <ShelfContext.Provider value={{ books, reorderBooks }}>
      <Container className="shelf firstShelf">
        {booksSorted.firstShelf.map((book, index) => (
          <Book
            src={book.src}
            alt={book.alt}
            key={book.id}
            listName="firstShelf"
            index={index}
          />
        ))}
      </Container>
      <Container className="shelf secondShelf active">
        {booksSorted.secondShelf.map((book, index) => (
          <Book
            src={book.src}
            alt={book.alt}
            key={book.id}
            listName="secondShelf"
            index={index}
          />
        ))}
      </Container>
    </ShelfContext.Provider>
  );
};
