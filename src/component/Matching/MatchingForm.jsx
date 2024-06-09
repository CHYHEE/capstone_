import React, { useContext } from "react";
import { PiArrowsHorizontalBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from 'react-spinners';
import { LoginContext } from '../../context/LoginContextProvider';
import "./MatchingForm.css";


const MatchingForm = ({ capturedImage }) => {
    const { userInfo } = useContext(LoginContext);
    //const {capturedImage} = useContext(CapturedImageContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div>
            <div>
            <FadeLoader
                    color="#ED648B"
                    cssOverride={{
                        position: 'absolute',
                        top: '9%',
                        left: '8%'
                    }}
                    height={27}
                    loading
                    margin={12}
                    radius={3}
                    width={9}
                />
                <p className="matchingimgP">매칭 중</p>
                <button onClick={handleClick} className="matchingbtn">매칭취소</button>
            </div>
            <img src={capturedImage || "/img/profile.jpg"} alt="프로필" className="matchingimg"/>
            <div className="heart">
                <PiArrowsHorizontalBold/>
            </div>
            <img src="/img/matching.png" alt="matching" className="matchingimg2"/>
        </div>
    )
}
export default MatchingForm;