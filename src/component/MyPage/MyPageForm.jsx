import React, { useContext, useRef, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { TbCameraPlus } from "react-icons/tb";
import Webcam from 'react-webcam';
import { LoginContext } from '../../context/LoginContextProvider';
import './MyPageForm.css';

const MyPageForm = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const webcamRef = useRef(null);
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
        setUser({ ...user, [name]: value });
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

    const handleOpenModal = () => {
        console.log('모달 열기');
        setModalOpen(true);
        startWebcam();
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const startWebcam = () => {
        // 웹캠 켜는 로직
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    if (webcamRef.current) {
                        webcamRef.current.srcObject = stream;
                    }
                })
                .catch(error => console.error('Error accessing webcam:', error));
        } else {
            console.error('getUserMedia is not supported');
        }
    };

    const capture = async () => {
        // 사진 캡쳐하는 로직
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);
    
        // Base64 이미지 데이터에서 데이터 URL 부분을 제거
        const base64Image = imageSrc.split(',')[1];
    
        try {
            // 서버에 이미지를 보내는 로직
            const response = await fetch('http://localhost:8080/save-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ image: base64Image })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                console.log('Image saved successfully');
            }
        } catch (error) {
            console.error('Failed to save image:', error);
        }
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
                <div>
                    <button className='modalbutton' type="button" onClick={handleOpenModal}>프로필 인증하기</button>
                    {modalOpen && ( 
                        <div className="modal">
                            <div className="modal-content">
                                <IoClose className="close" onClick={handleCloseModal}/>
                                <p>지금부터 프로필 인증을 시작합니다.</p>
                                {capturedImage ? (
                                    <img className='capturedImage' src={capturedImage} alt="Captured" />
                                ) : (
                                    <Webcam
                                        audio={false}
                                        ref={webcamRef}
                                        screenshotFormat="image/jpeg"
                                        width={640}
                                        height={480}
                                    />
                                )}
                                <button onClick={capture}>사진 찍기</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="mypage-container">
                    <div className='name-container'>
                        <label>이름:</label>
                        <input type="text" id="name" name="name" value={user.name} onChange={handleChange} /><br/>
                    </div>
                    <div className='name-container'>
                        <label>성별:</label>
                        <input type="text" id="gender" name="gender" value={user.gender} onChange={handleChange} /><br/>
                    </div>
                    <div className='name-container'>
                        <label>생년월일:</label>
                        <input type="date" id="birth" name="birth" value={user.birth} onChange={handleChange} /><br/>
                    </div>
                    <div className='name-container'>
                        <label>MBTI:</label>
                        <input type="text" id="mbti" name="mbti" value={user.mbti} onChange={handleChange} /><br/>
                    </div>
                    <div className='name-container'>
                        <label>전화번호:</label>
                        <input type="text" id="phone" name="phone" value={user.phone} onChange={handleChange} /><br/>
                    </div>
                    <div className='name-container'>
                        <label>내 소개:</label>
                        <input id="bio" name="bio" value={user.bio} onChange={handleChange}/><br/>
                    </div>
                    <button className='mypagebutton' type="submit">저장</button>
                </div>
            </form>
        </div>
    );
};

export default MyPageForm;
