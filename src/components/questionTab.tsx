import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const NUM_NEED_ANSWERED = 3;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [numQuestionsSeen, setNumQuestionsSeen] = useState(0);
  const [maxReached, setMaxReached] = useState(false);
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
    setNumQuestionsSeen(numQuestionsSeen + 1);
    setUserAnswer(''); // Reset input field

  };

  useEffect(() => {
    console.log(numQuestionsSeen);
    // Move to the next question (loop back to 0 if at the end)
    if (numQuestionsSeen >= KnowledgeQuestions.length) {
      console.log('Max reached!');
      setMaxReached(true);
    }
  }, [numQuestionsSeen]);

  // Use effect to properly track correctCount
  useEffect(() => {
    if (correctCount === NUM_NEED_ANSWERED) {
      //window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
  }, [correctCount]);

  // Dynamically import image if the question has one
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
    //setCurrentImage(currentQuestion.image? ratImage: null);
  }, [currentQuestion])

  return (
    <div className="App">
      <header className="App-header">
        {!currentQuestion && (
          <div>
          <img src={ratImage}
            className='image' 
            alt="logo" 
            width="150" 
            height=""/>
          <h1>Question Loading...</h1>
        </div>
        )}
        {correctCount === NUM_NEED_ANSWERED && (
          <div>
            <img src={ratImage}
              className='image' 
              alt="rat"  
              style={{
                width: '25%', // Fill the container
                height: '25%', // Fill the container
                backgroundColor: '#ffffff', // White background
                display: 'center', // Center the image inside
              }}
            />
            <h1>Thank you for verifying... Please wait.</h1>
          </div>
        )}
        {maxReached && (
          <div>
          <img src={ratImage}
            className='image' 
            alt="rat"  
            style={{
              width: '25%', // Fill the container
              height: '25%', // Fill the container
              backgroundColor: '#ffffff', // White background
              display: 'center', // Center the image inside
            }}
          />
          <h1>Damn you suck!</h1>
        </div>
        )}
        {!maxReached && correctCount < NUM_NEED_ANSWERED && (
          <div>
            <div
              style={{
                display: 'flex', // Use flexbox for centering
                flexDirection: 'column', // Stack items vertically
                alignItems: 'center', // Center horizontally
                gap: '10px', // Add some spacing between image and text
              }}
            >
              <div
                style={{
                  width: '200px', // Fixed width for the image space
                  aspectRatio: '1 / 1', // Ensures square shape
                  marginBottom: '10px', // Consistent spacing below
                }}
              >
                {imageLoading && <p>Loading image...</p>}
                {currentImage && !imageLoading && (
                  <img
                    src={currentImage? currentImage: error}
                    className="image"
                    alt="question image"
                    style={{
                      width: '100%', // Fill the container
                      height: '100%', // Fill the container
                      objectFit: 'cover', // Crop to fit square
                      borderRadius: '8px', // Optional: slight rounding
                      backgroundColor: '#ffffff', // White background
                      display: 'flex', // Center the image inside
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                )}
              </div>
              <h2>Quiz Time!</h2>
            </div>
            <p>Correct Answers: {correctCount} / 3</p>
            <div>
              {/* This line causes error if max question is reached*/}
              <p>{currentQuestion.question}</p>
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
                    fontSize: '16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default QuestionTab;