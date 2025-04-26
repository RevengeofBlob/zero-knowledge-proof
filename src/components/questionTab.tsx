import React, { useState, useEffect } from 'react';
import { KnowledgeQuestions, Question } from '../data_questions/question';
import ratImage from '../images/holdrat.png';
import error from '../images/error.png';


// Function to shuffle elements
const shuffle = (array: any[]) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 
const questions: Question[] = shuffle(KnowledgeQuestions);

const QuestionTab: React.FC = () => {
  const NUM_NEED_ANSWERED = 8;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [numQuestionsSeen, setNumQuestionsSeen] = useState(0);
  const [maxReached, setMaxReached] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const currentQuestion: Question = questions[currentQuestionIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the answer is correct (case-insensitive)
    if (userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setCorrectCount(correctCount + 1);
    }

    // Index increment check to prevent crash
    if (currentQuestionIndex + 1 < KnowledgeQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    moveToNextQuestion();
    setUserAnswer(''); // Reset input field

  };

  const handleMCSubmit = (selectedOption: string) => {
    if (selectedOption.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setCorrectCount(correctCount + 1);
    }
    moveToNextQuestion();
  };

  // Move to the next question or set maxReached
  const moveToNextQuestion = () => {
    if (currentQuestionIndex + 1 < KnowledgeQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    setNumQuestionsSeen(numQuestionsSeen + 1);
  };

  useEffect(() => {
    // Move to the next question
    if (numQuestionsSeen >= KnowledgeQuestions.length) {
      setMaxReached(true);
    }
  }, [numQuestionsSeen]);

  // Use effect to properly track correctCount
  useEffect(() => {
    if (correctCount === NUM_NEED_ANSWERED) {
      setTimeout(() => {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      }, 100);
    }
  }, [correctCount]);

  // Dynamically import image if the question has one
  // Shuffle MC options if question type is 'mc'
  useEffect(() => {
    if (!maxReached && currentQuestion.image) {
      setImageLoading(true);
      setCurrentImage(error);
      import(`../images/${currentQuestion.image}`).then((imageModule) => {
        setCurrentImage(imageModule.default);
        setImageLoading(false);
      })
      .catch((error) => {
        console.error('Failed to load image:', error);
        setCurrentImage(null);
        setImageLoading(false);
      });
    } else {
      setCurrentImage(null);
    }

    // Shuffle MC options if question type is "mc"
    if (currentQuestion.type === 'mc' && currentQuestion.mc1 && currentQuestion.mc2 && currentQuestion.mc3 && currentQuestion.mc4) {
      const options = [
        currentQuestion.mc1,
        currentQuestion.mc2,
        currentQuestion.mc3,
        currentQuestion.mc4
      ];
      setShuffledOptions(shuffle([...options]))
    }

  }, [currentQuestion, maxReached])

  return (
    <div className="App">
      <header className="App-header">
        {!currentQuestion && (
          <div>
            <img
              src={ratImage}
              className="image"
              alt="logo"
              width="150"
              height=""
            />
            <h1>Question Loading...</h1>
          </div>
        )}
        {correctCount === NUM_NEED_ANSWERED && (
          <div>
            <img
              src={ratImage}
              className="image"
              alt="rat"
              style={{
                width: '25%',
                height: '25%',
                backgroundColor: '#ffffff',
                display: 'center',
              }}
            />
            <h1>Thank you for verifying. Please wait...</h1>
          </div>
        )}
        {maxReached && (
          <div>
            <img
              src={ratImage}
              className="image"
              alt="rat"
              style={{
                width: '25%',
                height: '25%',
                backgroundColor: '#ffffff',
                display: 'center',
              }}
            />
            <h1>Sorry, cannot let you in. Come back in 24 hours!</h1>
          </div>
        )}
        {!maxReached && correctCount < NUM_NEED_ANSWERED && (
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '200px',
                  aspectRatio: '1 / 1',
                  marginBottom: '10px',
                }}
              >
                {imageLoading && <p>Loading image...</p>}
                {currentImage && !imageLoading && (
                  <img
                    src={currentImage ? currentImage : error}
                    className="image"
                    alt="question image"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                )}
              </div>
              <h2>Quiz Time!</h2>
            </div>
            <p>Correct Answers: {correctCount} / {NUM_NEED_ANSWERED}</p>
            <div>
              <p>{currentQuestion.question}</p>
              {currentQuestion.type === 'mc' ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    alignItems: 'center',
                  }}
                >
                  {shuffledOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleMCSubmit(option)}
                      style={{
                        backgroundColor: '#3cb371',
                        color: '#000000',
                        border: 'none',
                        padding: '8px 12px',
                        fontSize: '16px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '200px',
                        textAlign: 'center',
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Type your answer"
                    style={{
                      backgroundColor: '#ffffff',
                      color: '#000000',
                      border: 'none',
                      padding: '8px 12px',
                      fontSize: '16px',
                      marginRight: '10px',
                      borderRadius: '4px',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#3cb371',
                      color: '#000000',
                      border: 'none',
                      padding: '8px 12px',
                      fontSize: '16px-studio',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default QuestionTab;