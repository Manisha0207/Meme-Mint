import React from "react";
import AnimatedPage from "../Components/Animated";
import WordRevealText from "../Components/WordRevealText";
import {useNavigate} from 'react-router-dom';
import "./dashboard.css";
import QuizPage from "../Components/Quiz";

function DashboardPage(){
    const navigate = useNavigate();

    return(
        <AnimatedPage>
            <div className="dashboard hero-container">
                <h1 className="display-2 fw-bold logo-text">Welcome to Meme Mint</h1>
                <div className="d-flex justify-content-center">
                    <img className="hero_img" src = "hero1.png"/>
                    <div className="hero-text">
                        <WordRevealText text="This isn't just a meme generator..." className="img-heading" />
                        <WordRevealText text="It’s your personal playground for dangerously underpaid comedians (yes, we're talking about you). Caption chaos, distort logic, and launch your wildest creations into the universe — or just into your group chat" className="img-text" />
                    </div>
                </div>
                <button 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                className="btn start-button mt-4"
                onClick={()=>navigate('/home')}>Start Creating</button>
                <p
                style={{
                    textAlign:'center',
                    margin:'20px',
                    fontSize:'24px',
                }}
                >Feeling curious? Ready to challenge yourself?</p>
                 <p
                style={{
                    textAlign:'center',
                    margin:'20px',
                    fontSize:'24px',
                }}
                >Take the quiz now and put your knowledge to the test! and Sharpen ypur Skills</p>
                <button className="btn start-button mt-3" 
                style={{
                    // paddingTop:'10px',
                    // alignContent:'center',
                    // marginLeft:'635px',
                    display: 'flex',
                     justifyContent: 'center',
                }}
                onClick={() => navigate('/quiz')}>
                Take a Meme Quiz
                </button>
            </div>
        </AnimatedPage> 
    );
}

export default DashboardPage;
