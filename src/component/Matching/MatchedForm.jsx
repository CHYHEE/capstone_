import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import "./MatchedForm.css";


const MatchedForm = () => {
    const { state } = useLocation();
    //const { matchingInfo } = useContext(LoginContext);
    //const {capturedImage} = useContext(CapturedImageContext);
    const [capturedImage2, setCapturedImage2] = useState("/img/profile.png");
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
            <img src={state.profile_image?`data:image/jpeg;base64,${state.profile_image}`:capturedImage2} alt="Wmatched" className="matchedimg"/>
            <li className="info">
                <label className="infoP">
                    <IoPersonSharp style={{marginBottom:'6px'}}/>
                    사용자 정보
                </label>
                <label className="infoLabel">이름 : {state.memberName}</label>
                <label className="infoLabel">생년월일 : {state.birth}</label>
                <label className="infoLabel">성별 : {state.gender}</label>
                <label className="infoLabel">MBTI : {state.mbti}</label>
            </li>
        </div>
    )
}
export default MatchedForm;