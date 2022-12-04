import { useState } from 'react';
import Header from './components/toDoList/header/Header';
import ToDoList from './components/toDoList/ToDoList';

const filterType = ['all', 'active', 'completed'];
function App() {
  const [ currentFilter, setCurrentFilter ] = useState(filterType[0]);
  const onFilterChange = (filter) => setCurrentFilter(filter);

  return (
    <div>
      <Header filterType={filterType} onFilterChange={onFilterChange} currentFilter={currentFilter}/>
      <ToDoList currentFilter={currentFilter}/>
    </div>
  );
}

export default App;
