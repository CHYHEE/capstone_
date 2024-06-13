import React, { useContext, useEffect, useState } from "react";
import { PiArrowsHorizontalBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from 'react-spinners';
import { matching } from "../../api/matching";
import { LoginContext } from '../../context/LoginContextProvider';
import "./MatchingForm.css";


const MatchingForm = ({ capturedImage }) => {
    const { userInfo } = useContext(LoginContext);
    const [capturedImage2, setCapturedImage2] = useState("/img/profile.png");
    const [matchedUser, setMatchedUser] = useState(null);
    const [loading, setLoading] = useState(false);

    //const {capturedImage} = useContext(CapturedImageContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await matching();
                setLoading(false);
                if (res) {
                    setMatchedUser(res);
                    setTimeout(()=>{
                        console.log("매칭 중");
                        navigate("/matched", { state: res });
                    }, 4000);
                } else {
                    console.error(`error : ${res.status}`);
                }
            } catch (error) {
                console.error(`error : ${error}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
            <img src={capturedImage || capturedImage2} alt="프로필" className="matchingimg"/>
            <div className="icon">
                <PiArrowsHorizontalBold/>
            </div>
            <img src="/img/matching.png" alt="matching" className="matchingimg2"/>
        </div>
    )
}
export default MatchingForm;