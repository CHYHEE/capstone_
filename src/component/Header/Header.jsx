import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import {LoginContext} from '../../context/LoginContextProvider';
import { IoPersonSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Header = () =>{

    // ✅ isLogin   : 로그인 여부 - Y(true), N(false)
    // ✅ logout()  : 로그아웃 함수 - setIsLogin(false)
    const { isLogin, logout, userInfo } = useContext(LoginContext);
    const navigate = useNavigate();

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src="/img/logo.png" alt="logo" className='logo'/>
                </Link>
                <div className="label-container">
                    <label onClick={() => navigate("/introduction")}>소개</label>
                    <label onClick={() => navigate("/mbtitest")}>MBTI 테스트</label>
                    <label onClick={() => navigate("/matching")}>매칭</label>
                </div>
            </div>
            <div>
                <ul className="menu-list">
                    {/* 로그인 여부에 따라 조건부 랜더링 */}
                    { !isLogin ? (
                        <div className='label-container'>
                            <label onClick={() => navigate("/login")}>
                                <li>로그인</li>
                            </label>
                        </div>
                    ) : (
                        <>
                            <div className='logo label-container'>
                                <label onClick={() => navigate("/mypage")}>마이페이지</label>
                            </div>
                            <li className="username">
                                <span onClick={()=>navigate("/mypage")}>
                                    <IoPersonSharp style={{fontSize: '17px'}}/>
                                    {userInfo.username}
                                </span>님 환영합니다.
                            </li>
                            <button className='link' onClick={() => logout()}>
                                로그아웃
                            </button>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
}

export default Header;