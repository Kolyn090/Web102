import React from "react"
import '../style/flashcard.css'
import '../style/font.css'
import { useState } from 'react';

function FlashCard(props) {
    var isFlipped = props.isFlipped;
    var onFlip = props.onFlip;

    const difficultyColors = {
    1: '#DFFFD6', // Very Easy - light green
    2: '#C8E8FF', // Easy - light blue
    3: '#FFEAA7', // Medium - soft yellow
    4: '#FFB347', // Hard - orange
    5: '#FF6B6B'  // Very Hard - red
    };

    const handleClick = () => {
        onFlip();
    };

    function jalapenos(n) {
        return "🌶️".repeat(n);
    }

    function getbgcolor(n) {
        return difficultyColors[n];
    }

    function CodeBlock({ children }) {
        const text = typeof children === "string" ? children : "";

        function longestLineLength(text) {
            const lines = text.split('\n');
            return Math.max(...lines.map(line => line.length));
        }

        function getFontSizePx(maxWidthPx, longestLineLength, minFontSize = 10, maxFontSize = 24) {
            if (longestLineLength === 0) return maxFontSize; // no text

            // Calculate raw font size that fits the longest line exactly
            let size = Math.floor(maxWidthPx / longestLineLength);

            // Clamp between min and max font size
            size = Math.max(minFontSize, Math.min(size, maxFontSize));

            return size;
        }

        const maxSize = 24; // px
        const minSize = 10;
        const maxLength = 800;

        const fontSizePx = getFontSizePx(maxLength, longestLineLength(text), minSize, maxSize);

        return (
            <pre className="code-font" style={{ fontSize: fontSizePx + "px" }}>
                {children}
            </pre>
        );
    }

    return (
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="flashcard-inner">
                <div className="flashcard-front" style={{backgroundColor: getbgcolor(props.difficulty)}}>
                    <div style={{padding: '10px'}}>
                        <p>
                            What is the type of { props.ask }?
                        </p>
                        <p>
                            Difficulty: {jalapenos(props.difficulty)}
                        </p>
                        <div className="code-container">
                            <CodeBlock>
                                {props.problem}
                            </CodeBlock>
                        </div>
                    </div>
                </div>
                <div className="flashcard-back">
                    <div style={{padding: '10px'}}>
                        <p>
                            The answer is:
                        </p>
                        <div className="code-container">
                            <CodeBlock>
                                {props.answer}
                            </CodeBlock>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashCard
