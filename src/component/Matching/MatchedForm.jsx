import React, { useContext } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { LoginContext } from '../../context/LoginContextProvider';
import "./MatchedForm.css";


const MatchedForm = () => {
    const { userInfo } = useContext(LoginContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div>
                <img src="/img/matching.png" alt="matching" className="matchingimg"/>
                <p className="matchingimgP">매칭 성공!</p>
                <button onClick={handleClick} className="matchingbtn">매칭취소</button>
                <li className="userinfo">
                    <label className="userinfoP">
                        <IoPersonSharp style={{marginBottom:'6px'}}/>
                        사용자 정보
                    </label>
                    <label className="userinfoLabel">ID : {userInfo.userId}</label>
                    <label className="userinfoLabel">이름 : {userInfo.memberName}</label>
                    <label className="userinfoLabel">생년월일 : {userInfo.userBirth}</label>
                    <label className="userinfoLabel">성별 : {userInfo.userGender}</label>
                    <label className="userinfoLabel">MBTI : {userInfo.userMbti}</label>
                </li>
        </div>
    )
}
export default MatchedForm;