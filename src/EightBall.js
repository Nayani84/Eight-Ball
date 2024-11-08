import React, { useState } from "react";
import './EightBall.css';

function EightBall({ answers }) {
    const genRandom = () => Math.floor(Math.random() * answers.length);

    const [answer, setAnswer] = useState({ msg: "Think of a Question", color: "black" });
    const [colorCounts, setColorCounts] = useState({ green: 0, goldenrod: 0, red: 0 });

    function handleClick() {
        let randomAnswer = answers[genRandom()];
        let newAnswer = { msg: randomAnswer.msg, color: randomAnswer.color };
        setAnswer(newAnswer);

        setColorCounts(preCounts => ({
            ...preCounts,
            [randomAnswer.color]: preCounts[randomAnswer.color] + 1
        }));
    }

    function reset() {
        setAnswer({ msg: "Think of a Question", color: "black" });
        setColorCounts({ green: 0, goldenrod: 0, red: 0 });
    }


    return (
        <div className="EightBall">
            <div className="EightBall-ball" style={{ backgroundColor: answer.color }} onClick={handleClick}>
                <h2 className="Answer">{answer.msg}</h2>
            </div>

            <div className="EightBall-counts">
                <p>Green: {colorCounts.green}</p>
                <p>Goldenrod: {colorCounts.goldenrod}</p>
                <p>Red: {colorCounts.red}</p>
            </div>

            <button onClick={reset} className="EightBall-reset">
                Reset
            </button>
        </div>
    );
}

export default EightBall;