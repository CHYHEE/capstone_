import React, { useContext, useRef, useState } from 'react';
import { TbCameraPlus } from "react-icons/tb";
import { LoginContext } from '../../context/LoginContextProvider';
import './MyPageForm.css';

const MyPageForm = () => {
    const { userInfo } = useContext(LoginContext);
    const [user, setUser] = useState({
        name: userInfo?.userName || '',
        gender: '',
        birth: '',
        mbti: '',
        profilePictureUrl: '',
        bio: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
         fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        // 파일 처리 로직을 여기에 작성
        console.log(files);
    };

    return (
        <div>
            <p className='mypageP'>마이페이지</p>
            <form onSubmit={handleSubmit}>
            <img className="profile-picture" src="/img/프로필.webp" alt="Profile Picture" />
            <div>
                <TbCameraPlus className='camera' onClick={handleButtonClick} style={{fontSize: '50px'}}/>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </div>
            <div className="mypage-container">
                <div className='name-container'>
                    <label>이름:</label>
                    <input type="text" id="name" name="name" value={userInfo.memberName} onChange={handleChange} /><br/>
                </div>
                <div className='name-container'>
                    <label>성별:</label>
                    <input type="text" id="gender" name="gender" value={userInfo.userGender} onChange={handleChange} /><br/>
                </div>
                <div className='name-container'>
                    <label>생년월일:</label>
                    <input type="date" id="birth" name="birth" value={userInfo.userBirth} onChange={handleChange} /><br/>
                </div>
                <div className='name-container'>
                    <label>MBTI:</label>
                    <input type="text" id="mbti" name="mbti" value={userInfo.userMbti} onChange={handleChange} /><br/>
                </div>
                <div className='name-container'>
                    <label>전화번호:</label>
                    <input type="text" id="phone" name="phone" value={userInfo.userPhone} onChange={handleChange} /><br/>
                </div>
                <div className='name-container'>
                    <label>내 소개:</label>
                    <input id="bio" name="bio" value={userInfo.bio} onChange={handleChange}/><br/>
                </div>
                <button className='mypagebutton' type="submit">저장</button>
            </div>
            </form>
        </div>
    );
};

export default MyPageForm;