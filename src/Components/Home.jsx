import { useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    useEffect(()=>{
        document.getElementById("letter-icn").addEventListener("click",()=>{
            document.querySelector(".tap").style.display = "none";
            document.getElementById("letter-icn").classList.add("shrink-box");
            setTimeout(()=>{
                //after letter shrink and before heart render
                document.getElementById("letter-icn").style.display = "none";
                document.querySelector(".rendering").style.display = "block";
                document.getElementById("load-icn").style.display = "block";
                document.getElementsByClassName("heart-wrapper")[0].classList.add("reveal-heart");
                document.querySelector(".render").style.display = "block";
                setTimeout(()=>{
                    //after heart rendered
                    document.querySelector(".rendering").style.display = "none";
                    document.getElementById("load-icn").style.display = "none";  
                    document.querySelector(".render").style.display = "none";   
                    document.querySelector(".set-btn").style.display = "block";               
                }, 30000)
            }, 2000)
        });

    },[])
    return (
        <div className="home">
            <p className="main-head">Our Very Weird Year</p>
            <p className="sub-head">As i promised, here is my letter to you before this year ends!!</p>
            <p className="tap">Tap on the letter below to reveal</p>
            <p className="rendering">Writing your letter... Since I am bad at letter writing, this may take a while.</p>
            <div className="wrapper">
                <img id="load-icn" src={require("../images/loadingicon.png")} alt="" />
            </div>
            <div className="wrapper">
                <img id="letter-icn" src={require("../images/lettericon.png")} alt="letter" />
            </div>
            <div className="wrapper">
                <div className="heart-wrapper">
                <img id="heart-icn" src={require("../images/hearticon.webp")} alt="heart" />
                </div>
            </div>
            <p className="render">rendering...</p>
            <div className="wrapper">
                <button onClick={()=>navigate("/question")} className = "set-btn">
                    All Set <br/> Lezzgooooo
                    <img id="tick-icn" src={require("../images/tickicon.png")} alt="tick" />
                </button>
            </div>
        </div>
    );
}

export default Home;
