import React from "react";
import './Question.css'; // Import the CSS file
import { useNavigate } from "react-router-dom";

const Question = () => {
    const navigate = useNavigate();

    return (
        <div className="question">
            <div className="question_inner">
                <div className="question_title">
                    How are you feeling today?
                </div>
                <div className="question_buttons">
                    <button 
                        className="question_button good" 
                        onClick={() => navigate('/home?feeling=good')}
                        aria-label="Feeling Good"
                    >
                        Good
                    </button>
                    <button 
                        className="question_button neutral" 
                        onClick={() => navigate('/home?feeling=neutral')}
                        aria-label="Feeling Neutral"
                    >
                        Neutral
                    </button>
                    <button 
                        className="question_button bad" 
                        onClick={() => navigate('/home?feeling=bad')}
                        aria-label="Feeling Bad"
                    >
                        Bad
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Question;