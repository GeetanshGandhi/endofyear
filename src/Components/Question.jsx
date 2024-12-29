import React from 'react'
import './Question.css'
import { useNavigate } from 'react-router-dom'
export default function Question() {
    const navigate = useNavigate();
    const errormessages = [
        "wrong answer\ntry again",
        "merese badi bhulakkad tu hogyi hai ab dobara try kar",
        "ab tu dekh beta ab to tu gayi! \n kuch bhi yaad nhi rehta",
        "fuck you.",
        "hey bhagwan tune itne galat jawab diye ki mere paas galat jawab batane ke tareeke khtm hogye.\nab first wala repeat hoga!!!!"
    ]
    let errorIterator = 0
    const answer1 = "11092021"
    const answer2 = "09042021"

    const handleProceed = () => {
        document.getElementsByClassName("proceed-btn")[0].style.display = "none";
        document.getElementsByClassName("pakka-btn")[0].style.display = "block";
    }
    const handlePakka = ()=> {
        const ans1 = document.getElementById("answer1").value
        const ans2 = document.getElementById("answer2").value
        const err = document.getElementsByClassName("error")[0];
        if(ans1 === answer1 && ans2 === answer2) {
            navigate("/letter")
        } else {
            document.getElementsByClassName("error")[0].style.display = "block";
            err.innerText = errormessages[(errorIterator++)%5];
            document.getElementsByClassName("proceed-btn")[0].style.display = "block";
            document.getElementsByClassName("pakka-btn")[0].style.display = "none";
        }
    }
    return (
        <div className='question-container'>
            <p className="ques-head">Before we proceed, verify that: </p>
            <p className="ques-points">1. You are not a robot</p>
            <p className="ques-points">2. You are no other human except Shreshtha Vyas</p>

            <p className="ques-subhead">Answer the following question:</p>
            <p className="question">Our first date on?</p>
            <div className="wrapper">
                <input type="text" id="answer1" placeholder="ddmmyyyy"/>
            </div>
            <p className="question">You sent first SMS to me on?</p>
            <div className="wrapper">
                <input type="text" id="answer2" placeholder="ddmmyyyy"/>
            </div>
            <div className="wrapper">
                <span className="error"></span>
            </div>
            <div className="wrapper">
                <button onClick={handleProceed} className='proceed-btn'>Proceed</button>
            </div>
            <div className="wrapper">
                <button onClick={handlePakka} className='pakka-btn'>Pakka?</button>
            </div>
        </div>
    )
}
