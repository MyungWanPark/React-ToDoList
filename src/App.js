import { useState } from "react";
import { DarkModeProvider } from "./components/toDoList/context/DarkModeContext";
import Header from "./components/toDoList/Header/Header";
import ToDoList from "./components/toDoList/ToDoList/ToDoList";

const filterType = ["all", "active", "completed"];
function App() {
    const [currentFilter, setCurrentFilter] = useState(
        filterType[0],
    );
    const onFilterChange = (filter) => setCurrentFilter(filter);

    return (
        <DarkModeProvider>
            <Header
                filterType={filterType}
                onFilterChange={onFilterChange}
                currentFilter={currentFilter}
            />
            <ToDoList currentFilter={currentFilter} />
        </DarkModeProvider>
    );
}

export default App;
