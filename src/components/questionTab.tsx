import React, { useState, useEffect } from 'react';
import { TwentyPointQuestions, TenPointQuestions, FivePointQuestions, Question } from '../data_questions/question';
import greenCheck from '../images/green_check.png';
import sadFace from '../images/sadface.jpg';
import stopEmoji from '../images/stop_emoji.jpg';
import error from '../images/error.png';


// Function to shuffle elements
const shuffle = (array: any[]) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 
const setQuestionsMedium = (array:any[]) =>{
  array = mediumQuestions
  return array;
};
const setQuestionsHard = (array:any[]) =>{
  array = hardQuestions
  return array;
};

const easyQuestions: Question[] = shuffle(FivePointQuestions);
const mediumQuestions: Question[] = shuffle(TenPointQuestions);
const hardQuestions: Question[] = shuffle(TwentyPointQuestions);  

const QuestionTab: React.FC = () => {
  const QUESTIONS_PER_DIFFICULTY = 3;
  const TOTAL_QUESTIONS = 9;
  const REQUIRED_SCORE = 75;
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [numQuestionsSeen, setNumQuestionsSeen] = useState(0);
  const [maxReached, setMaxReached] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [showWarning, setShowWarning] = useState<boolean>(true);
  const [initialSelect, setInitialSelect] = useState<'yes'| 'no'| null>(null);

  // Get current question set based on difficulty
  const getCurrentQuestionSet = () => {
    switch(difficulty) {
      case 'easy':
        return easyQuestions;
      case 'medium':
        return mediumQuestions;
      case 'hard':
        return hardQuestions;
      default:
        return easyQuestions;
    }
  };

  const currentQuestion = getCurrentQuestionSet()[currentQuestionIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submitTime = new Date(); // Gets current submit time
    const totalTimeInSec = Math.floor(submitTime.getTime() - startTime.getTime()) / 1000;
    //console.log(totalTimeInSec);

    // Check if the answer is correct (case-insensitive)
    if (userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase() && currentQuestion.expectedTime >= totalTimeInSec) {
      setScore(score + currentQuestion.points);
    }

    // Index increment check to prevent crash
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    moveToNextQuestion();
    setUserAnswer(''); // Reset input field

  };

  const handleMCSubmit = (selectedOption: string) => {
    const submitTime = new Date(); // Gets current submit time
    const totalTimeInSec = Math.floor(submitTime.getTime() - startTime.getTime()) / 1000;
    //console.log(totalTimeInSec);

    if (selectedOption.toLowerCase() === currentQuestion.answer.toLowerCase() && currentQuestion.expectedTime >= totalTimeInSec) {
      setScore(score + currentQuestion.points);
    }
    moveToNextQuestion();
  };

  // Move to the next question or set maxReached
  const moveToNextQuestion = () => {
    const newNumQuestionsSeen = numQuestionsSeen + 1;
    setNumQuestionsSeen(newNumQuestionsSeen);

    // Check if we need to change difficulty
    if (newNumQuestionsSeen % QUESTIONS_PER_DIFFICULTY === 0) {
      if (difficulty === 'easy') {
        setDifficulty('medium');
        setCurrentQuestionIndex(0);
      } else if (difficulty === 'medium') {
        setDifficulty('hard');
        setCurrentQuestionIndex(0);
      }
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    // Check if we've reached total questions
    if (newNumQuestionsSeen >= TOTAL_QUESTIONS) {
      setMaxReached(true);
    }
  };


  // Use effect to properly track correctCount
  useEffect(() => {
    if (score >= REQUIRED_SCORE) {
      setTimeout(() => {
        window.location.href = 'https://hypixel.net/';
      }, 3000);
    }
  }, [score]);

  // Redirects user to google
  // Or user selects no when self-reporting
  useEffect(() => {
    if (maxReached || initialSelect === 'no') {
      setTimeout(() => {
        window.location.href = 'https://www.google.com';
      }, 5000);
    }
  }, [maxReached, initialSelect]);

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


  // Use effect to properly determine the start time to answer
  useEffect(() => {
    setStartTime(new Date);
  }, [currentQuestion, showWarning]);

  return (
    <div className="App">
      <header className="App-header">
        {showWarning && (
          <div>
            <img
              src={stopEmoji}
              className="image"
              style={{
                width: '25%',
                height: '25%',
                backgroundColor: '#ffffff',
                display: 'center',
              }}
            />
            <h2>Are you over the age of 13?</h2>
            <p>Note: You will need to verify if yes</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px'
              }}
            >
              <button
                type="submit"
                onClick={() => {setShowWarning(false); setInitialSelect('yes')}}
                style={{
                  backgroundColor: '#3cb371',
                  color: '#000000',
                  border: 'none',
                  padding: '10px 90px',
                  fontSize: '16px-studio',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Yes
              </button>
              <button
                type="submit"
                onClick={() => {setInitialSelect('no'); setShowWarning(false)}}
                style={{
                  backgroundColor: '#3cb371',
                  color: '#000000',
                  border: 'none',
                  padding: '10px 90px',
                  fontSize: '16px-studio',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                No
              </button>
            </div>
          </div>
        )}
        {!currentQuestion && !showWarning && initialSelect === 'yes' && (
          <div>
            <h1>Question Loading...</h1>
          </div>
        )}
        {score >= REQUIRED_SCORE && !showWarning && initialSelect === 'yes' &&(
          <div>
            <img
              src={greenCheck}
              className="image"
              style={{
                width: '35%',
                height: '35%',
                backgroundColor: '#ffffff',
                display: 'center',
              }}
            />
            <h2>Thank you for verifying. Redirecting you to Hypixel...</h2>
          </div>
        )}
        {maxReached && !showWarning && initialSelect === 'yes' && (
          <div>
            <img
              src={sadFace}
              className="image"
              alt="rat"
              style={{
                width: '20%',
                height: '20%',
                backgroundColor: '#ffffff',
                display: 'center',
              }}
            />
            <h2>Sorry, cannot let you in. Please contact our staff if you are over 13.
              Redirecting you to fallback...
            </h2>
          </div>
        )}
        {initialSelect === 'no' && !showWarning && (
          <div>
            <img
              src={sadFace}
              className="image"
              alt="rat"
              style={{
                width: '20%',
                height: '20%',
                backgroundColor: '#ffffff',
                display: 'center',
              }}
            />
            <h2>Sorry, only users over the age of 13 are allowed to access our services.
              Redirecting you off our site...
            </h2>
          </div>
        )}
        {!maxReached && score < REQUIRED_SCORE && !showWarning && initialSelect === 'yes' && (
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
                {imageLoading && initialSelect === 'yes' && <p>Loading image...</p>}
                {currentImage && !imageLoading && initialSelect === 'yes' && (
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
            </div>
            <div>
              <p>{currentQuestion.question}</p>
              {currentQuestion.type === 'mc' && initialSelect === 'yes'? (
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
