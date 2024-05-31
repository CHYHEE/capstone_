import React from "react";
import {FadeLoader} from 'react-spinners';
import "./MatchingForm.css";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";

const MatchingForm = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div>
            <span className="userid">
                <IoPersonSharp style={{fontSize: '30px'}}/>
                {/* {userInfo.userId} */}님 환영합니다.
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
                    <p className="userinfoP">
                        사용자 정보
                    </p>
                    <p>
                        
                    </p>
                </li>
        </div>
    )
}
export default MatchingForm;