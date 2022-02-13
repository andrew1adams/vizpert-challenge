import produce from 'immer';
import { createContext, useEffect, useState } from 'react';
import { books, shelfContextDefaultValue } from '../constants';
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
        const sortedFirst = arrayDraft.firstShelf.sort((a, b) =>
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

        const sortedSecond = arrayDraft.secondShelf.sort((a, b) =>
          !a.letter
            ? 0
            : !b.letter
            ? 0
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
    const HEXtoRGB = (color: string) => {
      if (color) {
        color = color.replaceAll('#', '');
        const HEX: {
          red: string | number;
          green: string | number;
          blue: string | number;
        } = {
          red: color.substring(0, 2),
          green: color.substring(2, 4),
          blue: color.substring(4, 6),
        };
        HEX.red = typeof HEX.red === 'string' ? parseInt(HEX.red, 16) : HEX.red;
        HEX.green =
          typeof HEX.green === 'string' ? parseInt(HEX.green, 16) : HEX.green;
        HEX.blue =
          typeof HEX.blue === 'string' ? parseInt(HEX.blue, 16) : HEX.blue;
        return HEX;
      }
    };
    const RGBtoHSL = ({
      red,
      green,
      blue,
    }: {
      red: number;
      green: number;
      blue: number;
    }) => {
      red /= 255;
      green /= 255;
      blue /= 255;
      const minBetweenColors = Math.min(red, green, blue);
      const maxBetweenColors = Math.max(red, green, blue);
      const differenceBetweenValues = maxBetweenColors - minBetweenColors;
      const HSL = {
        hue: 0,
        saturation: 0,
        lightness: 0,
      };
      // some checks to assign value to hue
      if (differenceBetweenValues === 0) {
        HSL.hue = 0;
      } else if (maxBetweenColors === red) {
        HSL.hue = ((green - blue) / differenceBetweenValues) % 6;
      } else if (maxBetweenColors === 0) {
        HSL.hue = (blue - red) / differenceBetweenValues + 2;
      } else {
        HSL.hue = (red - green) / differenceBetweenValues + 4;
      }
      HSL.hue = Math.round(HSL.hue * 60);
      if (HSL.hue < 0) {
        HSL.hue += 360;
      }
      // calc of lightness
      HSL.lightness = (maxBetweenColors + minBetweenColors) / 2;
      HSL.saturation = //calc of saturation
        differenceBetweenValues === 0
          ? 0
          : differenceBetweenValues / (1 - Math.abs(2 * HSL.lightness - 1));
      // ending of conversion to hsl
      HSL.saturation = +(HSL.saturation * 100).toFixed(1);
      HSL.lightness = +(HSL.lightness * 100).toFixed(1);
      HSL.hue = HSL.hue === 239 ? 179 : HSL.hue;
      return HSL;
    };
    setBooksSorted(
      produce(booksSorted, (arrayDraft) => {
        const itensAlreadyConvert = arrayDraft.firstShelf.some(
          (item) =>
            typeof item.color !== 'string' && typeof item.color !== undefined
        );
        if (!itensAlreadyConvert) {
          const sortedFirst = arrayDraft.firstShelf.map((book) => {
            book.color = HEXtoRGB(book.color);
            return (
              book.color && {
                ...book,
                color: RGBtoHSL({
                  blue: book.color.blue,
                  green: book.color.green,
                  red: book.color.red,
                }),
              }
            );
          });
          sortedFirst.sort((curr, next) =>
            !curr.color
              ? -1
              : !next.color
              ? -1
              : curr.color.hue - next.color.hue > 0
              ? 1
              : -1
          );
          arrayDraft.firstShelf = sortedFirst;
        } else
          arrayDraft.firstShelf.sort((curr, next) =>
            !curr.color
              ? -1
              : !next.color
              ? -1
              : curr.color.hue - next.color.hue > 0
              ? 1
              : -1
          );
        const secondShelfItensAlreadyConvert = arrayDraft.firstShelf.some(
          (item) =>
            typeof item.color !== 'string' && typeof item.color !== undefined
        );
        if (!secondShelfItensAlreadyConvert) {
          const sortedSecond = arrayDraft.secondShelf.map((book) => {
            book.color = HEXtoRGB(book.color);
            return (
              book.color && {
                ...book,
                color: RGBtoHSL({
                  blue: book.color.blue,
                  green: book.color.green,
                  red: book.color.red,
                }),
              }
            );
          });
          sortedSecond.sort((curr, next) =>
            !curr.color
              ? -1
              : !next.color
              ? -1
              : curr.color.hue - next.color.hue > 0
              ? 1
              : -1
          );
          arrayDraft.secondShelf = sortedSecond;
        } else
          arrayDraft.secondShelf.sort((curr, next) =>
            !curr.color
              ? -1
              : !next.color
              ? -1
              : curr.color.hue - next.color.hue > 0
              ? 1
              : -1
          );
      })
    );
  };

  const handleSizeSort = () => {
    setBooksSorted(
      produce(booksSorted, (arrayDraft) => {
        const sortedFirst = arrayDraft.firstShelf.sort((curr, next) =>
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

        const sortedSecond = arrayDraft.secondShelf.sort((curr, next) =>
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
      }}
    >
      {children}
    </ShelfContext.Provider>
  );
};

export { ShelfContext, ShelfContextProvider };
