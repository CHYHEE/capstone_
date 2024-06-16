import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import * as Swal from '../../api/alert';
import { CapturedImageContext } from '../../context/CapturedImageContext';
import { LoginContext } from '../../context/LoginContextProvider';
import './MyPageForm.css';

const MyPageForm = () => {
    const [modalOpen, setModalOpen] = useState(false);
    //const [capturedImage, setCapturedImage] = useState(null);
    const [isVerified, setIsVerified] = useState(false);
    const [selectedImage, setSelectedImage] = useState("/img/profile.png");
    //const [image, setInternalImage] = useState(null);
    const webcamRef = useRef(null);
    //const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const { userInfo } = useContext(LoginContext);
    const { capturedImage, setCapturedImage } = useContext(CapturedImageContext);
    const [user, setUser] = useState({
        name: '',
        gender: '',
        birth: '',
        mbti: '',
        phone: '',
        bio: ''
    });

    // useEffect(() => {
    //     const savedImage = localStorage.getItem('capturedImage');
    //     if (savedImage) {
    //         setCapturedImage(savedImage);
    //     }
    // }, []);

    useEffect(() => {
        const savedName = localStorage.getItem("name");
        const savedGender = localStorage.getItem("gender");
        const savedBirth = localStorage.getItem("birth");
        const savedMbti = localStorage.getItem("mbti");
        const savedPhone = localStorage.getItem("phone");
        const savedBio = localStorage.getItem("bio");
        
        setUser({
            name: savedName || userInfo.memberName || '',
            gender: savedGender || userInfo.userGender || '',
            birth: savedBirth || userInfo.userBirth || '',
            mbti: savedMbti || userInfo.userMbti || '',
            phone: savedPhone || userInfo.userPhone || '',
            bio: savedBio || ''
        });
    }, [userInfo]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 사용자 이름만을 로컬 저장소에 저장합니다.
        localStorage.setItem("name", user.name);
        localStorage.setItem("gender", user.gender);
        localStorage.setItem("birth", user.birth);
        localStorage.setItem("mbti", user.mbti);
        localStorage.setItem("phone", user.phone);
        localStorage.setItem("bio", user.bio);
        // 저장 완료 메시지를 표시하고 마이페이지로 이동합니다.
    };

    //-------------------
    // const handleSubmit2 = async() => {
    //     const res = await updateInfo(loginId, mbti, userName, birth, gender, phone);
    //         if(res.statusCode == 200){
    //             Swal.alert('저장 성공!', '홈 페이지로 이동합니다.', 'success', () => {
    //                 navigate('/');
    //             });
    //         }
    //         else{
    //             Swal.alert('저장 실패!', '', 'warning');
    //         }
    // }

    // const handleButtonClick = () => {
    //     fileInputRef.current.click();
    // };

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setSelectedImage(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    // };

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


    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        //base64로 변환
        const base64 = imageSrc.split(',')[1];
        //변환된 base64를 서버로 전송
        console.log(base64);
        axios.post('http://127.0.0.1:8080/member/upload', {
            image: base64
        },{withCredentials: true})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        setCapturedImage(imageSrc); // 캡처된 이미지 상태 업데이트
        //setInternalImage(imageSrc);

        Swal.alert("프로필 인증 성공", "", "success", () => { 
            setModalOpen(false);
            navigate("/mypage");
        })
    };

    // const storeCapturedImage = (image) => {
    // setCapturedImage(image);
    // localStorage.setItem('capturedImage', image);
    // };

    return (
        <div>
            <p className='mypageP'>마이페이지</p>
            <form onSubmit={handleSubmit}>
            <img className={capturedImage ? "captured-picture" : "selected-picture"} src={capturedImage || selectedImage} alt="Profile Picture"/>
                {/* <div>
                    <TbCameraPlus className='camera' onClick={handleButtonClick} style={{fontSize: '50px'}}/>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                </div> */}
                <div>
                    <button className='modalbutton' type="button" onClick={handleOpenModal} disabled={isVerified}>
                        {isVerified ? '프로필 인증 완료' : '프로필 인증하기'}
                    </button>
                    {modalOpen && ( 
                        <div className="modal">
                            <div className="modal-content">
                                <IoClose className="close" onClick={handleCloseModal}/>
                                <p className='profileP'>프로필 인증을 시작합니다.</p>
                                <button className='profilebtn' onClick={capture}>사진 찍기</button>
                                {capturedImage ? (
                                    <img
                                        className='capturedImage'
                                        src={capturedImage}
                                        alt="Captured"
                                            onLoad={() => {
                                                setTimeout(() => {
                                                    Swal.alert("프로필 인증 성공", "", "success", () => { 
                                                        setModalOpen(false);
                                                        navigate("/mypage");
                                                        setIsVerified(true);
                                                    })
                                                },1000);
                                            }}
                                    />
                                ) : (
                                    <Webcam
                                        audio={false}
                                        ref={webcamRef}
                                        screenshotFormat="image/jpeg"
                                        width={640}
                                        height={480}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className="mypage-container">
                    <p className='myP'>내 정보</p>
                    <div className='name-container'>
                        <label>이름:</label>
                        <input type="text" id="name" name="name" value={user.name} onChange={handleChange}/><br/>
                    </div>
                    <div className='name-container'>
                        <label>성별:</label>
                        <input type="text" id="gender" name="gender" value={user.gender} onChange={handleChange} /><br/>
                    </div>
                    <div className='name-container'>
                        <label>생년월일:</label>
                        <input type="date" id="birth" name="birth" value={user.birth} onChange={handleChange}/><br/>
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
                    <button className='mypagebutton' type="submit" onClick={() => {
                        Swal.alert("저장되었습니다!", "", "success", () => {
                            navigate("/");
                        });
                    }} >저장</button>
                </div>
            </form>
        </div>
    );
};

export default MyPageForm;
