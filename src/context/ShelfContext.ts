import { createContext } from 'react';
import { shelfContextDefaultValue } from '../constants';
import { ShelfContextProps } from '../interfaces';

const ShelfContext = createContext<ShelfContextProps>(shelfContextDefaultValue);

export default ShelfContext;
