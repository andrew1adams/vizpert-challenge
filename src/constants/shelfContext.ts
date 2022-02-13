import { IReorderBooks } from '../interfaces';

const shelfContextDefaultValue = {
  reorderBooks: ({ fromList, toList, from, to }: IReorderBooks) => {},
  booksSorted: {
    firstShelf: [
      {
        id: 0,
        letter: '',
        size: 0,
        color: '',
        src: '',
        alt: '',
      },
    ],
    secondShelf: [
      {
        id: 0,
        letter: '',
        size: 0,
        color: '',
        src: '',
        alt: '',
      },
    ],
  },
  setBooksSorted: () => {},
  buttonIsActive: {
    first: false,
    second: false,
    third: false,
  },
  setButtonIsActive: () => {},
  sortOrder: undefined,
  setSortOrder: () => {},
  handleAlphaSort: () => {},
  handleColorSort: () => {},
  handleSizeSort: () => {},
};

export default shelfContextDefaultValue;
