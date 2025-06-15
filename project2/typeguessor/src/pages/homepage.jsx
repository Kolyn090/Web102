import React from "react"
import quizdata from "../assets/problemsheet.json"
import FlashCard from "../components/flashcard"
import { useState } from "react";

function Homepage(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [problemIndex, setProblemIndex] = useState(0);

    function SetRandomProblem() {
        return setProblemIndex(Math.floor(Math.random() * quizdata.length));
    }

    const handleFlip = () => setIsFlipped(!isFlipped);

    const handleNext = () => {
        SetRandomProblem();
        setIsFlipped(false); // Reset flip state on next card
    };
    

    return (
        <div>
            <h1>Typescript Type Guessing Game By Kolyn090</h1>
            <h2>Total number of cards: {quizdata.length}</h2>
            <FlashCard isFlipped={isFlipped}
                        onFlip={handleFlip}
                        ask={quizdata[problemIndex]["ask"]}
                        difficulty={quizdata[problemIndex]["difficulty"]}
                        problem={quizdata[problemIndex]["problem"]}
                        answer={quizdata[problemIndex]["answer"]}
            ></FlashCard>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Homepage
