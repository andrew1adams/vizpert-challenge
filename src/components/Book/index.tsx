import { Container } from './style';
import { useDrag, useDrop } from 'react-dnd';
import { useRef, useContext } from 'react';
import { ShelfContext } from '../../context';
import { BookProps, IDraggableItem } from '../../interfaces';

const Book: React.FC<BookProps> = ({ src, alt, listName, index }) => {
  const dndRef = useRef<HTMLLIElement>(null);
  const { reorderBooks } = useContext(ShelfContext);

  const [, dragRef] = useDrag({
    type: 'BOOK',
    item: { listName, index },
  });

  const [, dropRef] = useDrop({
    accept: 'BOOK',
    hover(item: IDraggableItem, monitor) {
      const listItem = item.listName;
      const targetList = listName;

      const draggedItem = item.index;
      const targetItem = index;

      if (draggedItem === targetItem) return;

      if (dndRef.current) {
        const targetSize = dndRef.current.getBoundingClientRect();
        const targetCenter = (targetSize.right - targetSize.left) / 2;

        const draggedOffset = monitor.getClientOffset();

        console.log('Target list: ', targetList);
        console.log('Target item: ', targetItem);

        if (draggedOffset) {
          const draggedHorizontal = draggedOffset.x - targetSize.left;

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
          item.listName = targetList;
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
