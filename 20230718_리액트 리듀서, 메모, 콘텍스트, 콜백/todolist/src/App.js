import { createContext, useState } from 'react';
import './App.css';
import {Main, Popup} from './Components';

export const Global = createContext();

function App() {
  const [todolist,setTodolist] = useState([]);

  const obj = {
    todolist,
    setTodolist
  }

  return (
    <div className="App">
      <Global.Provider value={obj}>
        <button>할일 추가</button>
        <Main></Main>
        <Popup />
      </Global.Provider>
    </div>
  );
}

export default App;
