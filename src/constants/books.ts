import book_a from '../assets/book_a.svg';
import book_b from '../assets/book_b.svg';
import book_c from '../assets/book_c.svg';
import book_d from '../assets/book_d.svg';
import book_e from '../assets/book_e.svg';
import book_f from '../assets/book_f.svg';
import book_g from '../assets/book_g.svg';
import book_h from '../assets/book_h.svg';
import book_i from '../assets/book_i.svg';

const firstShelf = [
  {
    id: 1,
    letter: 'a',
    tall: 'lg',
    color: '#F1F552',
    src: book_a,
    alt: 'Book A',
  },
  {
    id: 2,
    letter: 'b',
    tall: 'md',
    color: '#EB3929',
    src: book_b,
    alt: 'Book B',
  },
  {
    id: 3,
    letter: 'c',
    tall: 'xl',
    color: '#F69340',
    src: book_c,
    alt: 'Book C',
  },
  {
    id: 4,
    letter: 'd',
    tall: 'xl',
    color: '#AF42F6',
    src: book_d,
    alt: 'Book D',
  },
  {
    id: 5,
    letter: 'e',
    tall: 'sm',
    color: '#40A7F6',
    src: book_e,
    alt: 'Book E',
  },
  {
    id: 6,
    letter: 'f',
    tall: 'md',
    color: '#DD108F',
    src: book_f,
    alt: 'Book F',
  },
  { id: 11 },
];

const secondShelf = [
  {
    id: 7,
    letter: 'g',
    tall: 'md',
    color: '#F460D4',
    src: book_g,
    alt: 'Book G',
  },
  {
    id: 8,
    letter: 'h',
    tall: 'xl',
    color: '#4041F6',
    src: book_h,
    alt: 'Book H',
  },
  {
    id: 9,
    letter: 'i',
    tall: 'xl',
    color: '#38E655',
    src: book_i,
    alt: 'Book I',
  },
  { id: 10 },
];

const books = { firstShelf, secondShelf };

export default books;
