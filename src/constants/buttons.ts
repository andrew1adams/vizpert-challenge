import {
  filter_alphabetic,
  filter_colors,
  filter_sizes,
  filter_date,
} from '../assets';

const buttons = [
  {
    id: 1,
    src: filter_alphabetic,
    alt: 'Alpha filter',
  },
  {
    id: 2,
    src: filter_colors,
    alt: 'Color filter',
  },
  {
    id: 3,
    src: filter_sizes,
    alt: 'Size filter',
  },
  {
    id: 4,
    src: filter_date,
    alt: 'Date filter',
  },
];

export default buttons;
