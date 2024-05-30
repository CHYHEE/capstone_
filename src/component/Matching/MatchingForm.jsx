import React from "react";
import {FadeLoader} from 'react-spinners';
import "./MatchingForm.css";
import { Link, useNavigate } from "react-router-dom";

const MatchingForm = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div>
            <Link>{/* {userInfo.userId} */}님 환영합니다.</Link>
                <img src="/img/matching.png" alt="matching" className="matchingimg"/>
                <FadeLoader
                    color="#ED648B"
                    cssOverride={{
                        position: 'absolute',
                        top: '20%',
                        left: '60%'
                    }}
                    height={27}
                    loading
                    margin={12}
                    radius={3}
                    width={9}
                />
                <p className="matchingimgP">매칭 중</p>
                <button onClick={handleClick} className="matchingbtn">매칭 취소</button>
        </div>
    )
}
export default MatchingForm;