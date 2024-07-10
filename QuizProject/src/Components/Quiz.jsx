import { useState, useCallback } from "react"
import QUESTIONS from "../questions.js";
import Summary from "./Summary.jsx";
import Question from "./Question.jsx";

export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = QUESTIONS.length === activeQuestionIndex;

    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    },
    []);
    
    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);
    
    if(quizIsComplete){
        return (
            <Summary userAnswers={userAnswers} />
        );
    }

    /*adding a key to a component like for QuestionTimer will reset the component (timer bar) every time a new key is
    passed to it, but you cannot use the same key different components for example activeQuestionIndex cannot be used 
    again*/
    return(
        <div id='quiz'>
            <Question 
            key={activeQuestionIndex}
            index={activeQuestionIndex} 
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
            />
    </div>
    )
}