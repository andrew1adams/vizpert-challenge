import { useEffect, useState } from 'react';
import { Book } from '..';
import { books } from '../../constants';
import { ShelfContext } from '../../context';
import { IBooks, IReorderBooks } from '../../interfaces';
import { Container } from './style';
import produce from 'immer';

export const Shelf = () => {
  const [booksSorted, setBooksSorted] = useState<IBooks>(books);

  const reorderBooks = ({
    fromList,
    toList,
    from,
    to,
  }: IReorderBooks): void => {
    setBooksSorted(
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

  useEffect(() => {
    const removeAuxBookOnShelfs = (listName: string) => {
      const verifyListName =
        listName === 'firstShelf' ? 'firstShelf' : 'secondShelf';

      if (verifyListName === 'firstShelf') {
        if (booksSorted.firstShelf.length >= 10) {
          const findAuxBookBySrc = booksSorted.firstShelf.find(
            (book) => book.src === undefined
          );
          if (findAuxBookBySrc) {
            const nullItem = booksSorted.firstShelf.indexOf(
              findAuxBookBySrc,
              0
            );
            setBooksSorted(
              produce(booksSorted, (arrayDraft) => {
                arrayDraft.firstShelf.splice(nullItem, 1);
              })
            );
          }
        }
      }
      if (verifyListName === 'secondShelf') {
        if (booksSorted.secondShelf.length >= 10) {
          const findAuxBookBySrc = booksSorted.secondShelf.find(
            (book) => book.src === undefined
          );
          if (findAuxBookBySrc) {
            const nullItem = booksSorted.secondShelf.indexOf(
              findAuxBookBySrc,
              0
            );
            setBooksSorted(
              produce(booksSorted, (arrayDraft) => {
                arrayDraft.secondShelf.splice(nullItem, 1);
              })
            );
          }
        }
      }
    };

    const addAuxBookOnShelfs = (listName: string) => {
      const verifyListName =
        listName === 'firstShelf' ? 'firstShelf' : 'secondShelf';
      const auxItem = { id: 100 * Math.random() };

      if (verifyListName === 'firstShelf') {
        if (booksSorted.firstShelf.length < 9) {
          const findAuxBookAlreadyExists = booksSorted.firstShelf.find(
            (item) => item.src === undefined
          );
          console.log(findAuxBookAlreadyExists);

          if (findAuxBookAlreadyExists) return;

          setBooksSorted(
            produce(booksSorted, (arrayDraft) => {
              arrayDraft.firstShelf.push(auxItem);
            })
          );
        }
      }

      if (verifyListName === 'secondShelf') {
        if (booksSorted.secondShelf.length < 9) {
          const findAuxBookAlreadyExists = booksSorted.secondShelf.find(
            (item) => item.src === undefined
          );

          if (findAuxBookAlreadyExists) return;

          console.log(findAuxBookAlreadyExists);

          setBooksSorted(
            produce(booksSorted, (arrayDraft) => {
              arrayDraft.secondShelf.push(auxItem);
            })
          );
        }
      }
    };

    removeAuxBookOnShelfs('firstShelf');
    removeAuxBookOnShelfs('secondShelf');
    addAuxBookOnShelfs('firstShelf');
    addAuxBookOnShelfs('secondShelf');
  }, [booksSorted]);

  return (
    <ShelfContext.Provider value={{ booksSorted, reorderBooks }}>
      <Container className="shelf firstShelf">
        {booksSorted.firstShelf.map((book, index) => {
          return (
            <Book
              src={book.src}
              alt={book.alt}
              key={book.id}
              listName="firstShelf"
              index={index}
              id={book.id}
            />
          );
        })}
      </Container>
      <Container className="shelf secondShelf">
        {booksSorted.secondShelf.map((book, index) => {
          return (
            <Book
              src={book.src}
              alt={book.alt}
              key={book.id}
              listName="secondShelf"
              index={index}
              id={book.id}
            />
          );
        })}
      </Container>
    </ShelfContext.Provider>
  );
};
