import React from "react"
import quizdata from "../assets/problemsheet.json"
import FlashCard from "../components/flashcard"
import AnswerField from "../components/answerfield"
import { useState } from "react";

function Homepage(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [problemIndex, setProblemIndex] = useState(0);
    const [feedbackTag, setFeedbackTag] = useState('default');
    const shownProblemIndices = [];

    function GetRandomNotShownIndex(list) {
        const availableIndices = list
            .map((_, idx) => idx)
            .filter(idx => !shownProblemIndices.includes(idx));

        if (availableIndices.length > 0) {
            return availableIndices[Math.floor(Math.random() * availableIndices.length)];
        } else {
            const lastIndex = shownProblemIndices[shownProblemIndices.length-1];
            shownProblemIndices.splice(0);
            shownProblemIndices.push(lastIndex);
            
            return GetRandomNotShownIndex();
        }
    }

    function SetRandomProblem(newIndex) {
        return setProblemIndex(newIndex);
    }

    const handleFlip = () => setIsFlipped(!isFlipped);

    const handleNext = () => {
        const randomIndex = GetRandomNotShownIndex(quizdata);
        shownProblemIndices.push(randomIndex);
        SetRandomProblem(randomIndex);
        setIsFlipped(false); // Reset flip state on next card
        setFeedbackTag('default'); // Reset feedback
    };

    const getSolution = () => {
        return [quizdata[problemIndex]["answer"]];
    }

    return (
        <div>
            <h1>Typescript Type Guessing Game By Kolyn090</h1>
            <h2>How well do you understand types in TypeScript? Take this quiz to find out!</h2>
            <h2>Total number of cards: {quizdata.length}</h2>
            <p>Current Streak: 0, Longest Streak: 0</p>
            <FlashCard isFlipped={isFlipped}
                        onFlip={handleFlip}
                        ask={quizdata[problemIndex]["ask"]}
                        difficulty={quizdata[problemIndex]["difficulty"]}
                        problem={quizdata[problemIndex]["problem"]}
                        answer={quizdata[problemIndex]["answer"]}
            ></FlashCard>
            <AnswerField feedbackTag={feedbackTag}
                            setFeedbackTag={setFeedbackTag}
                            answers={getSolution()}
            ></AnswerField>
            <button onClick={handleNext} style={{width: '100px'}}>Next</button>
        </div>
    )
}

export default Homepage
