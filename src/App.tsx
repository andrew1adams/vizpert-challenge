import { Main } from './components';
import { GlobalStyles } from './styles';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyles />
      <Main />
    </DndProvider>
  );
};

export default App;
