import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './Header.css'
import {LoginContext} from '../../context/LoginContextProvider';
import { IoPersonSharp } from "react-icons/io5";
import * as Swal from '../../api/alert';
const Header = () =>{

    // ✅ isLogin   : 로그인 여부 - Y(true), N(false)
    // ✅ logout()  : 로그아웃 함수 - setIsLogin(false)
    const { isLogin, logout, userInfo } = useContext(LoginContext);
    const navigate = useNavigate();

    const handleClick = () => {
        Swal.alert("로그인이 필요합니다", "로그인 화면으로 이동합니다.", "warning", () => {
            navigate("/login");
        });
    };

    const handleLogin = () => {
        navigate("/login");
    }

    return (
        <header>
            <div className="logo">
                <Link to="/home">
                    <img src="/img/logo.png" alt="logo" className='logo'/>
                </Link>

            </div>
            <div>
                <ul className="menu-list">
                    {/* 로그인 여부에 따라 조건부 랜더링입니다 */}
                    { !isLogin ?
                        <div className='li'>
                            <label onClick={handleLogin}>
                                <li>로그인</li>
                            </label>
                        </div>
                        :
                        <>
                            <Link to ="/mypage">
                                <li>마이페이지</li>
                            </Link>
                            <li className="font">
                                <span>
                                    <IoPersonSharp style={{fontSize: '17px'}}/>
                                    {userInfo.userId}
                                </span>님 환영합니다.
                            </li>
                            <button className='link' onClick={() => logout()}>
                                <li className="font" style={{fontSize: '16px'}}>로그아웃</li>
                            </button>
                        </>
                    }
                </ul>
            </div>
        </header>
    );
}

export default Header;