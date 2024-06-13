import React from 'react';
import Header from "../component/Header/Header";
import MatchedForm from '../component/Matching/MatchedForm';

const Matched = () => {

    return (
        <>
            <Header/>
            <div className='container'>
                <MatchedForm />
            </div>
        </>
    );
}

export default Matched;