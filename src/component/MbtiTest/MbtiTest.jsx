import React from 'react'
import {useState} from "react";
import {questionsMBTI, options} from "./TestForm"
import './MbtiTest.css'
import * as Swal from '../../api/alert';
import { useNavigate } from 'react-router-dom';


const Question = ({question, options, onAnswer}) => {
    // 답, 선택지 상태변수 관리
    const [selectedOption, setSelectedOption] = useState('');


    // 다음 문제로 넘어가는 함수
    const handleNextQuestion = () => {
        if (selectedOption ==="그렇다.") {
            onAnswer(question.YES);
        } else onAnswer(question.No);

        console.log(question.question);
    }

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }

    return (
        <>
            <div className='form'>
                <h2 className='h2'>{question.question}</h2>
                <form>
                    {options.map((option) => (
                        <div key={option}>
                            <label>
                                <input
                                    type="button"
                                    name="option"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={handleOptionChange}
                                    className="input"
                                    onClick={handleNextQuestion}
                                />
                            </label>
                        </div>
                    ))}
                </form>
            </div>
        </>
    );
}

const MbtiTest = () => {
    const [answers, setAnswers] = useState([])
    const [index, setIndex] = useState(0)
    const navigate = useNavigate();

    // 답변을 받아서 저장해 주는 함수
    const handleAnswer = (answer) => {
        setAnswers([...answers, answer])
        console.log('answers', answer)

        if (index < questionsMBTI.length) {
            setIndex(index + 1)
        } else {
            const mbtiType = calculateMBTIType(answers)        
            Swal.alert(`당신의 MBTI는 ${mbtiType} 입니다.`,"수고하셨습니다.","success", () => {navigate("/")})
        }
    }

    //MBTI 결과를 해석해 주는 함수
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
        // Determine the MBTI type
        const mbtiType = [
            dimensionCounts['E'] > dimensionCounts['I'] ? 'E' : 'I',
            dimensionCounts['S'] > dimensionCounts['N'] ? 'S' : 'N',
            dimensionCounts['T'] > dimensionCounts['F'] ? 'T' : 'F',
            dimensionCounts['J'] > dimensionCounts['P'] ? 'J' : 'P',
        ].join('');

        console.log('answer', answers);
        console.log('Your MBTI Type:', mbtiType);
        return mbtiType;
    }

    return (
        <div>
            <div>
                {index <questionsMBTI.length?
                <Question
                question={questionsMBTI[index]}
                options={options[0].options}
                onAnswer={handleAnswer}
                />
                    :
                    <div>
                    <p className='finishp'>수고하셨습니다😊</p>
                    <button className='finish' onClick={handleAnswer}>결과보기👉</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default MbtiTest