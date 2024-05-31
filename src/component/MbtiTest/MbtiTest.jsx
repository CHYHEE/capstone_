import React, { useState } from 'react';
import { questionsMBTI, options } from "./TestForm";
import './MbtiTest.css';
import * as Swal from '../../api/alert';
import { useNavigate } from 'react-router-dom';

function Question({ question, options, onAnswer }) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onAnswer(option === "그렇다." ? question.YES : question.NO);
    };

    return (
        <div className='form'>
            <h2 className='h2'>{question.question}</h2>
            <div>
                {options.map((option) => (
                    <div key={option}>
                        <button
                            type="button"
                            value={option}
                            className={`input ${selectedOption === option ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

const MbtiTest = () => {
    const [answers, setAnswers] = useState([]);
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
        console.log('answers', answers);

        if (index < questionsMBTI.length - 1) {
            setIndex(index + 1);
        } else {
            const mbtiType = calculateMBTIType([...answers, answer]);
            Swal.alert(`당신의 MBTI는 ${mbtiType} 입니다.`, "수고하셨습니다.", "success", () => { navigate("/") });
        }
    };

    const calculateMBTIType = (answers) => {
        const dimensionCounts = {
            E: 0,
            I: 0,
            S: 0,
            N: 0,
            T: 0,
            F: 0,
            J: 0,
            P: 0,
        };
        answers.forEach((char) => {
            dimensionCounts[char]++;
        });
        const mbtiType = [
            dimensionCounts['E'] > dimensionCounts['I'] ? 'E' : 'I',
            dimensionCounts['S'] > dimensionCounts['N'] ? 'S' : 'N',
            dimensionCounts['T'] > dimensionCounts['F'] ? 'T' : 'F',
            dimensionCounts['J'] > dimensionCounts['P'] ? 'J' : 'P',
        ].join('');

        console.log('answer', answers);
        console.log('Your MBTI Type:', mbtiType);
        return mbtiType;
    };

    return (
        <div>
            <div>
                {index < questionsMBTI.length ?
                    <Question
                        question={questionsMBTI[index]}
                        options={options[0].options}
                        onAnswer={handleAnswer}
                    />
                    :
                    <div>
                        <p className='finishp'>수고하셨습니다😊</p>
                        <button className='finish' onClick={() => Swal.alert(`당신의 MBTI는 ${calculateMBTIType(answers)} 입니다.`, "수고하셨습니다.", "success", () => { navigate("/") })}>
                            결과보기👉
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}

export default MbtiTest;
