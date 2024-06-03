import React, { useContext } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from 'react-spinners';
import { LoginContext } from '../../context/LoginContextProvider';
import "./MatchingForm.css";


const MatchingForm = () => {
    const { userInfo } = useContext(LoginContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div>
            <span className="userid">
                <IoPersonSharp style={{fontSize: '30px'}}/>
                {userInfo.userName}님 환영합니다.
            </span>
                <img src="/img/matching.png" alt="matching" className="matchingimg"/>
                <FadeLoader
                    color="#ED648B"
                    cssOverride={{
                        position: 'absolute',
                        top: '9%',
                        left: '60%'
                    }}
                    height={27}
                    loading
                    margin={12}
                    radius={3}
                    width={9}
                />
                <p className="matchingimgP">매칭 중</p>
                <button onClick={handleClick} className="matchingbtn">매칭취소</button>
                <li className="userinfo">
                    <label className="userinfoP">
                        <IoPersonSharp style={{marginBottom:'6px'}}/>
                        사용자 정보
                    </label>
                    <label className="userinfoLabel">ID : {userInfo.userId}</label>
                    <label className="userinfoLabel">이름 : {userInfo.userName}</label>
                    <label className="userinfoLabel">생년월일 : {userInfo.userBirth}</label>
                    <label className="userinfoLabel">성별 : {userInfo.userGender}</label>
                    <label className="userinfoLabel">MBTI : {userInfo.userMbti}</label>
                </li>
        </div>
    )
}
export default MatchingForm;