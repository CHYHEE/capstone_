import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { LoginContext } from '../../context/LoginContextProvider';
import "./MatchedForm.css";


const MatchedForm = ({ capturedImage }) => {
    const { userInfo } = useContext(LoginContext);
    //const {capturedImage} = useContext(CapturedImageContext);
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/matching");
    }

    const handleClick = () => {
        navigate("/chat");
    }

    return (
        <div>
            <div>
                <p className="matchedP">
                    <FaCheck />
                    매칭 성공!
                </p>
                <button onClick={handleClick} className="clickbtn">수락</button>
                <button onClick={handleCancel} className="cancelbtn">거절</button>
            </div>
            <img src="/img/matching.png" alt="matched" className="matchedimg"/>
            <li className="info">
                <label className="infoP">
                    <IoPersonSharp style={{marginBottom:'6px'}}/>
                    사용자 정보
                </label>
                <label className="infoLabel">ID : {userInfo.userId}</label>
                <label className="infoLabel">이름 : {userInfo.userName}</label>
                <label className="infoLabel">생년월일 : {userInfo.userBirth}</label>
                <label className="infoLabel">성별 : {userInfo.userGender}</label>
                <label className="infoLabel">MBTI : {userInfo.userMbti}</label>
                <label className="infoLabel">소개 : {userInfo.userBio}</label>
            </li>
        </div>
    )
}
export default MatchedForm;