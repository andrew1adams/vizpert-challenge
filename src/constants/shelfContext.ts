import { IReorderBooks } from '../interfaces';

const shelfContextDefaultValue = {
  reorderBooks({ fromList, toList, from, to }: IReorderBooks) {
    return;
  },
  books: {
    firstShelf: [
      {
        id: 0,
        letter: '',
        tall: '',
        color: '',
        src: '',
        alt: '',
      },
    ],
    secondShelf: [
      {
        id: 0,
        letter: '',
        tall: '',
        color: '',
        src: '',
        alt: '',
      },
    ],
  },
};

export default shelfContextDefaultValue;
