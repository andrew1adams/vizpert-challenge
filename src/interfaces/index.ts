export interface IBook {
  id: number;
  letter: string;
  tall: string;
  color: string;
  src: string;
  alt: string;
}

export interface IBooks {
  firstShelf: IBook[];
  secondShelf: IBook[];
}

export interface IReorderBooks {
  fromList: string;
  toList: string;
  from: number;
  to: number;
}

export interface BookProps {
  src: string;
  alt: string;
  listName: string;
  index: number;
}

export interface IDraggableItem {
  listName: string;
  index: number;
}

export interface ShelfContextProps {
  books: IBooks;
  reorderBooks({ fromList, from, to }: IReorderBooks): void;
}
