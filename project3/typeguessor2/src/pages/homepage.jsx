import React from "react"
import quizdata from "../assets/problemsheet.json"
import FlashCard from "../components/flashcard"
import { useState } from "react";

function Homepage(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [problemIndex, setProblemIndex] = useState(0);
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
    };

    return (
        <div>
            <h1>Typescript Type Guessing Game By Kolyn090</h1>
            <h2>How well do you understand types in TypeScript? Take this quiz to find out!</h2>
            <h2>Total number of cards: {quizdata.length}</h2>
            <FlashCard isFlipped={isFlipped}
                        onFlip={handleFlip}
                        ask={quizdata[problemIndex]["ask"]}
                        difficulty={quizdata[problemIndex]["difficulty"]}
                        problem={quizdata[problemIndex]["problem"]}
                        answer={quizdata[problemIndex]["answer"]}
            ></FlashCard>
            <button onClick={handleNext} style={{width: '100px'}}>Next</button>
        </div>
    )
}

export default Homepage
