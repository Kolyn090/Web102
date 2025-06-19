import React from "react"
import quizdata from "../assets/problemsheet.json"
import FlashCard from "../components/flashcard"
import AnswerField from "../components/answerfield"
import "../style/answerfield.css"
import { useState } from "react";

function Homepage(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [index, setIndex] = useState(0);
    const [problemIndex, setProblemIndex] = useState(0);
    const [feedbackTag, setFeedbackTag] = useState('default');
    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);
    const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
    const [problemIndices, setProblemIndices] = useState(Array.from({length: quizdata.length}, (_, i) => i));
    const [answer, setAnswer] = useState('');

    function ShuffleProblemIndices() {
        function shuffle(array) {
            const result = array.slice(); // copy to avoid mutating original
            for (let i = result.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [result[i], result[j]] = [result[j], result[i]];
            }
            return result;
        }

        setProblemIndices(shuffle(problemIndices));
    }

    const prevProblemIndex = () => {
        if (index - 1 >= 0) {
            setIndex(index - 1);
            return problemIndices[index - 1];
        } else {
            setIndex(problemIndices.length-1);
            return problemIndices[problemIndices.length-1];
        }
    };

    const nextProblemIndex = () => {
        if (index + 1 < problemIndices.length) {
            setIndex(index + 1);
            return problemIndices[index + 1];
        } else {
            setIndex(0);
            return problemIndices[0];
        }
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
        setAnsweredCorrectly(false);
    }

    const handlePrev = () => {
        setProblemIndex(prevProblemIndex());
        setIsFlipped(false); // Reset flip state on next card
        setFeedbackTag('default'); // Reset feedback
    };

    const handleNext = () => {
        setProblemIndex(nextProblemIndex());
        setIsFlipped(false); // Reset flip state on next card
        setFeedbackTag('default'); // Reset feedback
        setAnswer('');
    };

    const getSolution = () => {
        return [quizdata[problemIndex]["answer"]];
    }

    return (
        <div>
            <h1>Typescript Type Guessing Game By Kolyn090</h1>
            <h3>How well do you understand types in TypeScript? Take this quiz to find out!</h3>
            <h3>Total number of cards: {quizdata.length}</h3>
            <p>Current Streak: {currentStreak}, Longest Streak: {longestStreak}</p>
            <FlashCard isFlipped={isFlipped}
                        onFlip={handleFlip}
                        ask={quizdata[problemIndex]["ask"]}
                        difficulty={quizdata[problemIndex]["difficulty"]}
                        problem={quizdata[problemIndex]["problem"]}
                        answer={quizdata[problemIndex]["answer"]}
            ></FlashCard>
            <AnswerField feedbackTag={feedbackTag}
                            setFeedbackTag={setFeedbackTag}
                            currentStreak={currentStreak}
                            setCurrentStreak={setCurrentStreak}
                            longestStreak={longestStreak}
                            setLongestStreak={setLongestStreak}
                            answeredCorrectly={answeredCorrectly}
                            setAnsweredCorrectly={setAnsweredCorrectly}
                            answer={answer}
                            setAnswer={setAnswer}
                            answers={getSolution()}
            ></AnswerField>
            <button onClick={ShuffleProblemIndices} className="submitbutton">Shuffle</button>
            <button onClick={handlePrev} style={{width: '100px', margin: '10px'}}>Prev</button>
            <button onClick={handleNext} style={{width: '100px'}}>Next</button>
        </div>
    )
}

export default Homepage
