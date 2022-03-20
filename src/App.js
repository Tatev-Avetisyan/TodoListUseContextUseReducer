import TodoMain from './Components/ToDoMain/TodoMain';
import './App.css';
import TodosProvider from './ContextProviders/TodosProvider'

function App() {
  return (
    <TodosProvider >
      <TodoMain/>
    </TodosProvider>
  );
}

export default App;
