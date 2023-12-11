import './App.css';
import { Main,Login,Shop } from './Pages';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* 조건부 랜더링 Routes가 Route들의 부모 컴포넌트 */}
      {/* Route 컴포넌트의 페이지를 정의 한 후, 속성을 2개 준다. path, element*/}
      {/* path : 브라우저의 경로 (컴포넌트 페이지를 바꿔서 보여줄 경로) */}
      {/* element : path가 맞으면 보여줄 컴포넌트 */}
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;
