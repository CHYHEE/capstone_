// MyPageForm.jsx

import React from 'react';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContextProvider';
import './MypageForm.css';

const MyPageForm = () => {
    const {userInfo} = useContext(LoginContext);

    return (
        <div className="my-page">
            <header className="header">
                <h1 className="header-title">My Page</h1>
            </header>
            <div className="container">
                <div className="profile">
                    <img className="profile-picture" src="/img/프로필.webp" alt="Profile Picture" />
                    <div className="profile-info">
                        <h2>{userInfo.username}</h2>
                        <p className="profile-detail">ID: {userInfo.id}</p>
                        <p className="profile-detail">Phone: {userInfo.phone}</p>
                        <p className="profile-detail">MBTI: {userInfo.mbti}</p>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content-title">My Information</h2>
                    <p className="content-text">This is some information about the user...</p>
                </div>
            </div>
            <footer className="footer">
                <p className="footer-text">&copy; 2024 My Page. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MyPageForm;