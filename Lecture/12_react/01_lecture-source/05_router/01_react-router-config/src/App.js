import Main from "./pages/Main";
import Menu from "./pages/Menu";
import About from "./pages/About";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// 라우팅 : 어떤 요청을 어디로 안내 및 매핑을 할 것인지를 정해놓고 진행하는 것
// 리액트에서는 요청에 따라 요청 매핑 된 컴포넌트를 랜더링한다.

// BrowserRouter : 라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트
// Routes : Route들을 묶어주는 단위 컴포넌트
// Route : url 요청 주소와 컴포넌트를 매핑해주는 단위 컴포넌트

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;  // export default function App() {} 이렇게 써도 됨