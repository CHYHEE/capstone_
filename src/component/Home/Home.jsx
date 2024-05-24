import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/home">
                    <img src="/img/logo.png" alt="logo"/>
                </Link>
            </div>

            <div>
                <ul className="menu-list">
                    <Link to="/">
                        <li>로그인</li>
                    </Link>
                    <Link to="/chat">
                        <li>채팅</li>
                    </Link>
                    <Link to="/mypage">
                        <li>마이페이지</li>
                    </Link>
                </ul>
            </div>
        </header>


)
}

export default Home;