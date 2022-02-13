import {
  book_a,
  book_b,
  book_c,
  book_d,
  book_e,
  book_f,
  book_g,
  book_h,
  book_i,
} from '../assets/';

const firstShelf = [
  {
    id: 1,
    letter: 'a',
    size: 60,
    color: '#F1F552',
    src: book_a,
    alt: 'Book A',
  },
  {
    id: 2,
    letter: 'b',
    size: 40,
    color: '#EB3929',
    src: book_b,
    alt: 'Book B',
  },
  {
    id: 3,
    letter: 'c',
    size: 80,
    color: '#F69340',
    src: book_c,
    alt: 'Book C',
  },
  {
    id: 4,
    letter: 'd',
    size: 90,
    color: '#AF42F6',
    src: book_d,
    alt: 'Book D',
  },
  {
    id: 5,
    letter: 'e',
    size: 10,
    color: '#40A7F6',
    src: book_e,
    alt: 'Book E',
  },
  {
    id: 6,
    letter: 'f',
    size: 30,
    color: '#DD108F',
    src: book_f,
    alt: 'Book F',
  },
];

const secondShelf = [
  {
    id: 7,
    letter: 'g',
    size: 20,
    color: '#F460D4',
    src: book_g,
    alt: 'Book G',
  },
  {
    id: 8,
    letter: 'h',
    size: 70,
    color: '#4041F6',
    src: book_h,
    alt: 'Book H',
  },
  {
    id: 9,
    letter: 'i',
    size: 50,
    color: '#38E655',
    src: book_i,
    alt: 'Book I',
  },
];

const books = { firstShelf, secondShelf };

export default books;
