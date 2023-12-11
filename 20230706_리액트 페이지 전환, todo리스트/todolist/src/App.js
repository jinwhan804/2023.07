import { useEffect, useState } from 'react';
import './App.css';
import { Main } from './Pages';

function App() {
  const todoDefault = {
    todo : '',
    done : false
  }

  const listDefault = [];
  
  const [list,setList] = useState(listDefault);

  const [todo,setTodo] = useState(todoDefault);

  useEffect(()=>{
    console.log(todo);
    console.log(list);
  },[todo,list])

  return (
    <div className="App">
      <Main setList={setList} list={list} setTodo={setTodo}/>
    </div>
  );
}

export default App;
