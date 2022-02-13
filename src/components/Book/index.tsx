import { Container } from './style';
import { useDrag, useDrop } from 'react-dnd';
import { useRef, useContext } from 'react';
import { ShelfContext } from '../../context';
import { BookProps, IDraggableBook } from '../../interfaces';

const Book: React.FC<BookProps> = ({ src, alt, listName, index, id }) => {
  const dndRef = useRef<HTMLLIElement>(null);
  const { reorderBooks } = useContext(ShelfContext);

  const [{ isDraggable }, dragBookRef] = useDrag({
    type: 'BOOK',
    item: { listName, index, id, dndRef },
    collect: (monitor) => ({
      isDraggable: monitor.isDragging(),
    }),
  });

  const [, dropBookRef] = useDrop({
    accept: 'BOOK',
    hover(book: IDraggableBook, monitor) {
      const bookList = book.listName;
      const targetBookList = listName;

      const draggedBookIndex = book.index;
      const indexOfTargetBook = index;

      if (draggedBookIndex === indexOfTargetBook && bookList === targetBookList)
        return;

      if (dndRef.current) {
        const targetSize = dndRef.current.getBoundingClientRect();
        const targetCenter = (targetSize.right - targetSize.left) / 2;

        const draggedOffset = monitor.getClientOffset();

        if (draggedOffset) {
          const draggedHorizontal = draggedOffset.x - targetSize.left;

          if (
            draggedBookIndex < indexOfTargetBook &&
            draggedHorizontal < targetCenter
          )
            return;
          if (
            draggedBookIndex > indexOfTargetBook &&
            draggedHorizontal > targetCenter
          )
            return;

          reorderBooks({
            fromList: bookList,
            toList: targetBookList,
            from: draggedBookIndex,
            to: indexOfTargetBook,
          });

          book.index = indexOfTargetBook;
          book.listName = targetBookList;
        }
      }
    },
  });

  dragBookRef(dropBookRef(dndRef));

  if (id && id < 10)
    return (
      <>
        <Container ref={dndRef} isDraggable={isDraggable}>
          <img src={src} alt={alt} />
        </Container>
      </>
    );

  return <Container ref={dndRef}></Container>;
};

export default Book;
