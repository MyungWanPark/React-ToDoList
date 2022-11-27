import { Header } from './components/toDoList/header/Header';
import Main from './components/toDoList/main/Main';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.toDoList}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
