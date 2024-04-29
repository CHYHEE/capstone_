// MyPageForm.jsx

import React from 'react';

const MyPageForm = () => {
    return (
        <div className="my-page">
            <header className="header">
                <h1 className="header-title">My Page</h1>
            </header>
            <nav className="navigation">
                <ul className="navigation-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </nav>
            <div className="container">
                <div className="profile">
                    <img className="KakaoTalk_20240411_155801141.jpg" src="" alt="Profile Picture" />
                    <div className="profile-info">
                        <h2 className="profile-name">User Name</h2>
                        <p className="profile-detail">Email: user@example.com</p>
                        <p className="profile-detail">Location: City, Country</p>
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