import { useState,useEffect } from 'react';
import './App.css';
import Body from './Pages/Body';
import Header from './Pages/Header';

function App() {
  const [isOpen,setOpen] = useState(false);

  useEffect(()=>{
    console.log(isOpen)
  },[isOpen])

  const CalendarBtn = ()=>{
    if(isOpen){
      setOpen(false);
    }else{
      setOpen(true);
    }
  }

  const Calendar = ()=>{
    if(isOpen){
      return <Body />;
    }else{
      return ;
    }
  }
  
  return (
    <div className="App">
      <Header/>      
      {Calendar()}
      <button onClick={CalendarBtn}>달력 보기</button>
    </div>
  );
}

export default App;
