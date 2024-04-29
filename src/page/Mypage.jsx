// MyPage.jsx

import React from 'react'
import Header from '../component/Header/Header'


const MyPage = () => {
    // 사용자 정보를 하드코딩된 상태로 가정
    const userInfo = {
        name: 'John Doe',
        email: 'john@example.com',
        location: 'City, Country',
        profileImage: 'KakaoTalk_20240411_155801141.jpg' // 프로필 이미지 경로
    };

    return (
        <div className="my-page">
            <header className="header">
                <h1 className="header-title">My Page</h1>
            </header>
            <div className="container">
                <div className="profile">
                    <img className="profile-picture" src="/img/KakaoTalk_20240411_155801141.jpg" alt="Profile Picture" />
                    <div className="profile-info">
                        <h2 className="profile-name">{userInfo.name}</h2>
                        <p className="profile-detail">Email: {userInfo.email}</p>
                        <p className="profile-detail">Location: {userInfo.location}</p>
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

export default MyPage;