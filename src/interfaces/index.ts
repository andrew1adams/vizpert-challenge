export interface IBook {
  id?: number;
  letter?: string;
  tall?: string;
  color?: string;
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
  emptyShelf: boolean;
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
  reorderBooks({ fromList, from, to }: IReorderBooks): void;
}
