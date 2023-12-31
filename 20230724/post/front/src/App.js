import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Login, Main, SignUp } from './Pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
