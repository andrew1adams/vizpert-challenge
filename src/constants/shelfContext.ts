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
    alpha: false,
    color: false,
    size: false,
    date: false,
  },
  setButtonIsActive: () => {},
  sortOrder: undefined,
  setSortOrder: () => {},
  handleAlphaSort: () => {},
  handleColorSort: () => {},
  handleSizeSort: () => {},
  handleDateSort: () => {},
};

export default shelfContextDefaultValue;
