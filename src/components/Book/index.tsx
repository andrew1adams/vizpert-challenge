import { Container } from './style';
import { useDrag, useDrop } from 'react-dnd';
import { useRef, useContext } from 'react';
import { ShelfContext } from '../../context';

interface BookProps {
  src: string;
  alt: string;
  listOrder: string;
  index: number;
}

interface IDraggableItem {
  listOrder: string;
  index: number;
}

const Book: React.FC<BookProps> = ({ src, alt, listOrder, index }) => {
  const dndRef = useRef<HTMLLIElement>(null);
  const { reorderBooks } = useContext(ShelfContext);

  const [, dragRef] = useDrag({
    type: 'BOOK',
    item: { listOrder, index },
  });

  const [, dropRef] = useDrop({
    accept: 'BOOK',
    hover(item: IDraggableItem, monitor) {
      const listItem = item.listOrder;
      const targetList = listOrder;

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
          item.listOrder = targetList;
        }
      }
    },
  });

  dragRef(dropRef(dndRef));

  return (
    <Container ref={dndRef}>
      <img src={src} alt={alt} />
    </Container>
  );
};

export default Book;
