import produce from 'immer';
import { createContext, useEffect, useState } from 'react';
import { books, shelfContextDefaultValue } from '../constants';
import { HEXtoHSL } from '../helper';
import { IBooks, IReorderBooks, ShelfContextProps } from '../interfaces';

const ShelfContext = createContext<ShelfContextProps>(shelfContextDefaultValue);

const ShelfContextProvider: React.FC = ({ children }) => {
  const [booksSorted, setBooksSorted] = useState<IBooks>(books);
  const [buttonIsActive, setButtonIsActive] = useState<
    ShelfContextProps['buttonIsActive']
  >(shelfContextDefaultValue.buttonIsActive);
  const [sortOrder, setSortOrder] = useState<ShelfContextProps['sortOrder']>();

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
        } else addAuxBookOnShelfs('firstShelf');
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
        } else addAuxBookOnShelfs('secondShelf');
      }
    };

    const addAuxBookOnShelfs = (listName: string) => {
      const verifyListName =
        listName === 'firstShelf' ? 'firstShelf' : 'secondShelf';
      const auxItem = { id: 1000 * Math.random() * 100 };

      if (verifyListName === 'firstShelf') {
        if (booksSorted.firstShelf.length < 9) {
          setBooksSorted(
            produce(booksSorted, (arrayDraft) => {
              arrayDraft.firstShelf.push(auxItem);
            })
          );
        }
      }

      if (verifyListName === 'secondShelf') {
        if (booksSorted.secondShelf.length < 9) {
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
  }, [booksSorted]);

  const handleAlphaSort = () => {
    setBooksSorted(
      produce(booksSorted, (arrayDraft) => {
        const filteredFirstArr = arrayDraft.firstShelf.filter(
          (item) => item.letter !== undefined
        );

        const sortedFirst = filteredFirstArr.sort((a, b) =>
          !a.letter
            ? -1
            : !b.letter
            ? -1
            : a.letter > b.letter
            ? 1
            : b.letter > a.letter
            ? -1
            : 0
        );

        arrayDraft.firstShelf = sortedFirst;

        const filteredSecondArr = arrayDraft.secondShelf.filter(
          (item) => item.letter !== undefined
        );

        const sortedSecond = filteredSecondArr.sort((a, b) =>
          !a.letter
            ? -1
            : !b.letter
            ? -1
            : a.letter > b.letter
            ? 1
            : b.letter > a.letter
            ? -1
            : 0
        );

        arrayDraft.secondShelf = sortedSecond;
      })
    );
  };

  const handleColorSort = () => {
    setBooksSorted(
      produce(booksSorted, (arrayDraft) => {
        const filtredFirstArray = arrayDraft.firstShelf.filter(
          ({ color }) => color ?? color
        );

        arrayDraft.firstShelf = filtredFirstArray.sort((a, b) => {
          if (a.color && b.color) {
            const convertedAColors = HEXtoHSL(a.color);
            const convertedBColors = HEXtoHSL(b.color);

            return convertedAColors?.hue - convertedBColors?.hue;
          }
          return -1;
        });

        const filtredSecondArray = arrayDraft.secondShelf.filter(
          ({ color }) => color ?? color
        );

        arrayDraft.secondShelf = filtredSecondArray.sort((a, b) => {
          if (a.color && b.color) {
            const convertedAColors = HEXtoHSL(a.color);
            const convertedBColors = HEXtoHSL(b.color);

            return convertedAColors?.hue - convertedBColors?.hue;
          }
          return -1;
        });
      })
    );
  };

  const handleSizeSort = () => {
    setBooksSorted(
      produce(booksSorted, (arrayDraft) => {
        const filteredFirstArr = arrayDraft.firstShelf.filter(
          (item) => item.size !== undefined
        );

        const sortedFirst = filteredFirstArr.sort((curr, next) =>
          !curr.size
            ? -1
            : !next.size
            ? -1
            : curr.size > next.size
            ? 1
            : next.size > curr.size
            ? -1
            : 0
        );

        arrayDraft.firstShelf = sortedFirst;

        const filteredSecondArr = arrayDraft.secondShelf.filter(
          (item) => item.size !== undefined
        );

        const sortedSecond = filteredSecondArr.sort((curr, next) =>
          !curr.size
            ? -1
            : !next.size
            ? -1
            : curr.size > next.size
            ? 1
            : next.size > curr.size
            ? -1
            : 0
        );

        arrayDraft.secondShelf = sortedSecond;
      })
    );
  };

  const handleDateSort = () => {
    setBooksSorted(
      produce(booksSorted, (arrayDraft) => {
        const filteredFirstArr = arrayDraft.firstShelf.filter(
          (item) => item.created_at !== undefined
        );

        const sortedFirst = filteredFirstArr.sort((a, b) =>
          !a.created_at
            ? -1
            : !b.created_at
            ? -1
            : a.created_at.getTime() - b.created_at.getTime()
        );

        arrayDraft.firstShelf = sortedFirst;

        const filteredSecondArr = arrayDraft.secondShelf.filter(
          (item) => item.letter !== undefined
        );

        const sortedSecond = filteredSecondArr.sort((a, b) =>
          !a.created_at
            ? -1
            : !b.created_at
            ? -1
            : a.created_at.getTime() - b.created_at.getTime()
        );

        arrayDraft.secondShelf = sortedSecond;
      })
    );
  };

  return (
    <ShelfContext.Provider
      value={{
        reorderBooks,
        booksSorted,
        setBooksSorted,
        buttonIsActive,
        setButtonIsActive,
        sortOrder,
        setSortOrder,
        handleAlphaSort,
        handleColorSort,
        handleSizeSort,
        handleDateSort,
      }}
    >
      {children}
    </ShelfContext.Provider>
  );
};

export { ShelfContext, ShelfContextProvider };
