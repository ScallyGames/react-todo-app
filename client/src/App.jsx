import './App.css';
import {TodoList} from './components/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo List Demo:
      </header>
      <main className="App-content">
        <TodoList />
      </main>
    </div>
  );
}

export default App;
