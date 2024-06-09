// MyPage.jsx

import React, { useContext } from 'react';
import Header from '../component/Header/Header';
import MyPageForm from "../component/MyPage/MyPageForm";
import { CapturedImageContext } from '../context/CapturedImageContext';


const MyPage = () => {
    //const [capturedImage, setCapturedImage] = useState(null);
    const {capturedImage} = useContext(CapturedImageContext);

    return (
        <>
            <Header/>
            <div className='container'>
                <MyPageForm capturedImage={capturedImage}/>
            </div>
        </>
    );
};

export default MyPage;