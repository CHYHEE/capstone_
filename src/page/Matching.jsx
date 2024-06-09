import React, { useContext } from 'react';
import Header from "../component/Header/Header";
import MatchingForm from '../component/Matching/MatchingForm';
import { CapturedImageContext } from '../context/CapturedImageContext';

const Matching = () => {
    const {capturedImage} = useContext(CapturedImageContext);

    return (
        <>
            <Header/>
            <div className='container'>
                <MatchingForm capturedImage={capturedImage}/>
            </div>
        </>
    );
}

export default Matching;