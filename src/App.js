import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import LoginContextProvider from "./context/LoginContextProvider";
import Home from './page/Home';
import Introduction from "./page/Introduction";
import Login from './page/Login';
import Matching from "./page/Matching";
import MbtiTestPage from "./page/MbtiTestPage";
import Mypage from "./page/Mypage";

const App = () => {
  return (
      <BrowserRouter>                {/* URL 관리, 브라우저의 주소를 처리 */}
        <LoginContextProvider>       {/* 로그인 관리 */}
          <Routes>                   {/* 어떤 컴포넌트를 렌더링할지 결정하는 역할 */}
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/mypage" element={<Mypage/>}/>
            <Route path="/mbtitest" element={<MbtiTestPage/>}/>
            <Route path="/introduction" element={<Introduction/>}/>
            <Route path="/matching" element={<Matching/>}/>
          </Routes>
        </LoginContextProvider>
      </BrowserRouter>
  );
};

export default App;
