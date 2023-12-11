import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import {Login,Main,Mypage,Order} from './Pages'
import {useSelector} from 'react-redux';

function App() {
  const login = useSelector(state => state.isLogin);

  const LoginCheck = ({path})=>{
    let root = '';

    if(path === '/order'){
      root = <Order />;
    }else if(path === '/mypage'){
      root = <Mypage />;
    }

    return login === true ? root : <Navigate to={'/login'}/>
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/mypage' element={<LoginCheck path={'/mypage'}/>}/>
        <Route path='/order' element={<LoginCheck path={'/order'}/>}/>
      </Routes>
    </div>
  );
}

export default App;
