// MyPage.jsx

import React, {useContext} from 'react'
import Header from '../component/Header/Header'
import {LoginContext} from "../context/LoginContextProvider";
import MyPageForm from "../component/MyPage/MyPageForm";


const MyPage = () => {
    return (
        <>
            <Header/>
            <div className='container'>
                <MyPageForm/>
            </div>
        </>
    );
};

export default MyPage;