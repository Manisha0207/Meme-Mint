import React, { useState, useEffect } from 'react';
// import quizData from "../data/quizData.json";
import "./quiz.css"
import { useNavigate } from 'react-router-dom';

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/quizData.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((quizData) => {
        if (!quizData || !Array.isArray(quizData.results) || quizData.results.length === 0) {
          throw new Error('Invalid or empty quiz data');
        }
  
        const formattedQuestions = quizData.results.map((q) => {
          const options = [...q.incorrect_answers];
          const randomIndex = Math.floor(Math.random() * (options.length + 1));
          options.splice(randomIndex, 0, q.correct_answer);
  
          return {
            question: decodeHtml(q.question),
            options: options.map(decodeHtml),
            correctAnswer: decodeHtml(q.correct_answer),
          };
        });
        
        const shuffled = formattedQuestions.sort(() => 0.5 - Math.random());
        const selectedTen = shuffled.slice(0, 10);

        setQuestions(selectedTen);
        setLoading(false);
      })
      .catch((err) => {
        setError(`Failed to load questions: ${err.message}`);
        setLoading(false);
      });
  }, []);


  function decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  const handleAnswer = (option) => {
    const currentQuestion = questions[index];
    if (option === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setAnswers([...answers, option]);
    setIndex((prev) => prev + 1);
  };

  if (loading) return <h2>Hold on Genius, Questions are getting ready for you...</h2>;
  if (error) return <h2>{error}</h2>;

  if (index >= questions.length) {
    return (
      <div className="container mt-5 text-center">
        <h2>
          {score > 8
            ? "You're a meme genius 🧠🔥"
            : "Keep practicing, meme apprentice! 💪"}
        </h2>
        <h4 style={{
            color:'#2c3e50',
        }}>Your Score: {score} / {questions.length}</h4>

        <h3 style={{
          marginTop:'30px',
          color:'#4a4a4a',
        }}>Want to go to your dashboard? Click below.</h3>

        <button
          className="btn"
          onClick={() => navigate('/')}
        >
          Home
        </button>
      </div>
    );
  }

  const question = questions[index];

  return (
    <div className="container mt-5 text-center">
      <h4>Question {index + 1} of {questions.length}</h4>
      <h2
      style={{
        marginTop:'20px',
        marginBottom:'20px',
        // color:'#2c3e50',
      }}>{question.question}</h2>
      <div className="d-flex flex-column align-items-center">
            {question.options.map((opt, i) => (
            <button
                key={i}
                className="btn m-3"
                style={{
                    // color:'#3498db',
                }}
                onClick={() => handleAnswer(opt)}
            >
                {opt}
            </button>
            ))}
        </div>
    </div>
  );
}

export default QuizPage;
