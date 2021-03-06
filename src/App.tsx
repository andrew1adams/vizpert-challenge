import { Main } from './components';
import { GlobalStyles } from './styles';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ShelfContextProvider } from './context';

const App = () => {
  const width = window.innerWidth;

  return (
    <ShelfContextProvider>
      <DndProvider backend={width > 480 ? HTML5Backend : TouchBackend}>
        <GlobalStyles />
        <Main />
      </DndProvider>
    </ShelfContextProvider>
  );
};

export default App;
