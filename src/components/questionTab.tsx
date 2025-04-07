import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KnowledgeQuestions, Question } from '../data_questions/question';

const QuestionTab: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const navigate = useNavigate();
  
    const currentQuestion: Question = KnowledgeQuestions[currentQuestionIndex];
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      // Check if the answer is correct (case-insensitive)
      if (userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
        setCorrectCount(correctCount + 1);
  
        if (correctCount + 1 === 3) {
          // After 3 correct answers, redirect to the YouTube link
          window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
          return;
        }
      }
  
      // Move to the next question (loop back to 0 if at the end)
      setCurrentQuestionIndex((prev) => 
        prev + 1 < KnowledgeQuestions.length ? prev + 1 : 0
      );
      setUserAnswer(''); // Reset input field
    };
  
    return (
      <div className="App">
        <header className="App-header">
          <h2>Quiz Time!</h2>
          <p>Correct Answers: {correctCount} / 3</p>
          <div>
            <p>{currentQuestion.question}</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type your answer"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </header>
      </div>
    );
};

export default QuestionTab;