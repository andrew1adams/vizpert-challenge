import { Container } from './style';
import { useDrag, useDrop } from 'react-dnd';
import { useRef, useContext } from 'react';
import { ShelfContext } from '../../context';

interface BookProps {
  src: string;
  alt: string;
  id: string;
  index: number;
}

interface IDraggableItem {
  id: string;
  index: number;
}

const Book: React.FC<BookProps> = ({ src, alt, id, index }) => {
  const dndRef = useRef<HTMLLIElement>(null);
  const { reorderBooks } = useContext(ShelfContext);

  const [{ isDraggingItem }, dragRef] = useDrag({
    type: 'BOOK',
    item: { id, index },
    collect: (monitor) => ({
      isDraggingItem: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'BOOK',
    hover(item: IDraggableItem, monitor) {
      const listItem = item.id;
      const targetList = id;

      const draggedItem = item.index;
      const targetItem = index;

      if (draggedItem === targetItem) return;

      if (dndRef.current) {
        const targetSize = dndRef.current.getBoundingClientRect();
        const targetCenter = (targetSize.right - targetSize.left) / 2;

        const draggedOffset = monitor.getClientOffset();

        if (draggedOffset) {
          const draggedHorizontal = draggedOffset.x - targetSize.left;

          console.log(targetCenter, draggedHorizontal);

          if (draggedItem < targetItem && draggedHorizontal < targetCenter)
            return;
          if (draggedItem > targetItem && draggedHorizontal > targetCenter)
            return;

          reorderBooks({
            fromList: listItem,
            toList: targetList,
            from: draggedItem,
            to: targetItem,
          });

          item.index = targetItem;
          item.id = targetList;
        }
      }
    },
  });

  dragRef(dropRef(dndRef));

  return (
    <Container ref={dndRef} isDraggingItem={isDraggingItem}>
      <img src={src} alt={alt} />
    </Container>
  );
};

export default Book;
