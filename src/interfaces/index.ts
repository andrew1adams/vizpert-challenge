import { Dispatch, SetStateAction } from 'react';

export interface IBook {
  id?: number;
  letter?: string;
  size?: number;
  color?: any;
  src?: string;
  alt?: string;
}

export interface IBooks {
  firstShelf: IBook[];
  secondShelf: IBook[];
}

export interface BookStyleProps {
  isDraggable?: boolean;
  isOver?: boolean;
}

export interface IReorderBooks {
  fromList: string;
  toList: string;
  from: number;
  to: number;
}

export interface IReorderBooksOnList {
  fromList: string;
  toList: string;
  item: IBook;
}

export interface BookProps {
  src?: string;
  alt?: string;
  id?: number;
  listName: string;
  index: number;
}

export interface IDraggableBook {
  id: number;
  listName: string;
  index: number;
  dndRef: React.RefObject<HTMLLIElement>;
}

export interface ShelfContextProps {
  booksSorted: IBooks;
  setBooksSorted: Dispatch<SetStateAction<IBooks>>;
  reorderBooks({ fromList, from, to }: IReorderBooks): void;
  buttonIsActive: {
    first: boolean;
    second: boolean;
    third: boolean;
  };
  setButtonIsActive: Dispatch<
    SetStateAction<ShelfContextProps['buttonIsActive']>
  >;
  sortOrder: 'reverse' | 'alpha' | 'size' | 'color' | undefined;
  setSortOrder: Dispatch<SetStateAction<ShelfContextProps['sortOrder']>>;
  handleAlphaSort: () => void;
  handleColorSort: () => void;
  handleSizeSort: () => void;
}

export interface ButtonProps {
  button: {
    id: number;
    src: string;
    alt: string;
  };
  index: number;
}

export interface ButtonStyleProps {
  isActive: boolean;
}
