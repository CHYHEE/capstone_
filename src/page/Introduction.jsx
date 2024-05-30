import React from 'react';
import Header from "../component/Header/Header";
import { AiFillEdit } from 'react-icons/ai';
import { FcSurvey } from 'react-icons/fc';
import { FaPeopleArrows } from 'react-icons/fa';
import { MdLock } from 'react-icons/md';
import './Introduction.css'; // 앞서 제공한 CSS 코드를 저장한 파일을 import

const Introduction = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h1 className="introductionH">MY BEST TYPE IMAGE란?</h1>
                <h2 className="introductionH2">성격 분석 검사를 통한<br /></h2>
                <h3 className="introductionH3">맞춤형 소개팅</h3>
                <div>
                    <div className="card">
                        <AiFillEdit size={100} />
                        <li style={{width: '400px'}}>설레이는 만남을 위한<br/> 선별된 회원가입(무료가입)</li>
                    </div>
                    <div className="card2">
                        <FcSurvey size={100} />
                        <li style={{width: '400px'}}>MBTI 성격검사를 통한<br/>성향 분석</li>
                    </div>
                    <div className="card3">
                        <FaPeopleArrows size={100} />
                        <li style={{width: '400px'}}>나와 잘 맞는 상대를 찾아주는<br/> 맞춤형 소개팅</li>
                    </div>
                    <div className="card4">
                        <MdLock size={100} />
                        <li style={{width: '400px'}}>안전한 서버 관리로 <br/>개인정보 보호</li>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Introduction;