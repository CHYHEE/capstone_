import React, { useContext, useState } from 'react';
import { LoginContext } from '../../context/LoginContextProvider';
import './LoginForm.css';
import Find from "../Find/Find";

const LoginForm = () => {
    const { login } = useContext(LoginContext);
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [show, setShow] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    return (
        <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`} id="container">
            <div className="form-container sign-up-container">
                <form action="#">
                    <label style={{fontSize: "25px"}}>회원정보 입력</label>
                    <p style={{marginTop : '-3px'}}>회원 가입을 위해 필요한 정보를 입력해주세요.</p>
                    <label style={{marginRight: '330px'}}>필수 항목 ✔</label>
                    <fieldset className='fieldset-style'>
                        <div className='label-input-container'>
                            <label>아이디 ✔</label>
                            <input type="text" placeholder="ID"/>
                        </div>
                        <div className='label-input-container'>
                            <label>비밀번호 ✔</label>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div className='label-input-container'>
                            <label>비밀번호 확인 ✔</label>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div className='label-input-container'>
                            <label>MBTI ✔</label>
                            <input type="text" placeholder="MBTI"/>
                        </div>
                    </fieldset>
                    <br/>
                        <fieldset className='fieldset-style'>
                            <div className='label-input-container'>
                                <label>이름</label>
                                <input type="text" placeholder="Name"/>
                            </div>
                            <div className='label-input-container'>
                                <label>생년월일</label>
                                <input type="date"/>
                            </div>
                            <div className="radio-container">
                                <label>성별</label>
                                <input type="radio" id="1" name="drone" value="1"/>남자
                                <p className='label-input-container' style={{marginRight: '10px'}}></p>
                                <input type="radio" id="2" name="drone" value="2"/>여자
                            </div>
                            <div className='label-input-container'>
                                <label>휴대폰 번호</label>
                                <input type="tel" placeholder="Phone"/>
                            </div>
                        </fieldset>
                    <br/>
                        <button type='submit'>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <span>or use your account</span>
                    <br/>
                    <input style={{width : '400px'}} type="text" placeholder="ID"/>
                    <input style={{width : '400px'}} type="password" placeholder="Password"/>
                    <br/>
                    <Find/>
                    <br/>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm