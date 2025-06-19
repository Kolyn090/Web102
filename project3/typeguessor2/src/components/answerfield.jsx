import React, { useState } from "react"
import "../style/answerfield.css"

function AnswerField(props) {
    const handleAnswerChange = (event) => {
        props.setAnswer(event.target.value);
    };

    const possibleFeedback = {
        'default': "(👉ﾟヮﾟ)👉 Make ya first guess.",
        'correct': "💪(￣▽￣💪) Correct! Too easy for ya?",
        'wrong': "( ͡ಠ ʖ̯ ͡ಠ)🤏 Not quite...",
        'empty': "(´。＿。｀)👇 Something isn't right!"
    };

    function feedback(tag) {
        if (tag in possibleFeedback) {
            return possibleFeedback[tag];
        }
        else {
            return possibleFeedback['default'];
        }
    };

    function verifyAnswerTag() {
        if (props.answers == null) {
            return 'empty';
        }
        return props.answers.includes(props.answer.toLowerCase()) ? 'correct' : 'wrong';
    }

    function onClickSubmit() {
        const verified = verifyAnswerTag();
        props.setFeedbackTag(verified);
        if (verified == 'correct') {
            if (!props.answeredCorrectly)
            {
                props.setCurrentStreak(props.currentStreak+1);
                props.setAnsweredCorrectly(true);
            }
        }
        else {
            if (props.currentStreak > props.longestStreak) {
                props.setLongestStreak(props.currentStreak);
            }
            props.setAnsweredCorrectly(false);
            props.setCurrentStreak(0);
        }
    }

    return (
        <div>
            <div className="answerfield">
                <h3 style={{margin: '10px'}}>Answer: </h3>
                <input type="text" value={props.answer} onChange={handleAnswerChange}></input>
                <button className="submitbutton" onClick={onClickSubmit}>Submit</button>
            </div>
            <div>
                <p>{feedback(props.feedbackTag)}</p>
            </div>
        </div>
    );
}

export default AnswerField
