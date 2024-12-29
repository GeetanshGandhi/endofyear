import React, { useEffect } from 'react'
import './Letter.css'
// import message from '../message.js'
export default function Letter() {
    useEffect(() => {
        console.log(message)
    }, [])
    return (
        <div className='letter-container'>
            <p className="header">Dear Shreshtha,</p>
            {
                message.map((para)=>{
                    return <p className="para">{para}</p>
                })
            }
        </div>
    )
}

const message = [
    "2024 is ending priye.... the most bizarre year of our lives together finally is ending. It was the worst in some senses. Apn ne start breakup se kia end breakup se kia beech me endless reckless fights arguments choti baat badi baat har chiz pe but but buttttt WE'RE STILL TOGETHER miraclee miracleee and hell i'll make this miracle happen even in future as well because mereko tu chaiye hi sahi. And lets just keep this year behind us, maybe try forget whatever bad happened and move on with a fresh start and ukw i like this phase of us the most lol like making upto u after real bad fight and being all lovey dovey cozy comfortable and HAPPIEST around u tagde kalesh ke baad. A lil positive side to them is that kalesh actually makes me realise how much i want u in my life... often i forget what importance u hold in my life and i get all egoistic male or idk but when we fight argue and then it comes down to uk the thought of us separating suddenly i remember that no matter what happens i dont want to be away from you and i make sure ki kuch bhi hojaye i will not let u go. tereko fasaya hai maine waat bhi lagayi hai ab achi khush zindagi jeene ko chorrne nhi wala hu mai tere ko :))) ",
    "There's not enough times i have told u this year how much i love you the extends of it and how much i have missed u everyday we didnt meet and even after meeting i've always missed u. So collectively on the behalf of our entire year I MISS YOU SO MUCH. while u were not with me i have cherished all our moments together making eye contacts in cafes having no idea what to talk about, kissing, cuddling everything maybe im not the person who looks into photos and videos that often (apologies for being like that) or maybe even forget lil details but ur presence has always been with me and i didnt need any photo to remind me of that. maybe i forget our moments together like some little minor details but i will never forget your feel, the jhurjhuri u give me the smell of you (your house, actually 😂). and i am gonna miss you much more in the upcoming year because im going to blr and soon you'll go for mba too and ese living-wise apne liye worse times are yet to come but know that i will always miss u each moment im away from you because uk \"love you every minute and every second, love you everywhere and every moment\" ❣️",
    "As 2024 ends i also believe i owe u tonnes of apologies for everytime i have been an ass to you... like i think most of the year i wasnt thinking well about us or even about u at times or i was being unneccesarily rude to u at times and basically ruining us and especially for about last 10-15 days where i have been completely off charts idiot. i was thinking that im doing something good but ofc no and im not gonna get into details anymore but yes i want to say sorry for every screw up i caused us ki baat breakup tak aagayi and i hope i dont be like that anymore... and also i think this has happened with us a lot of time that u needed me to be there for u badly when u were at a low point but i couldnt be there :) from now onwards, although i dont guarantee this to u ki i will be available all the time because it is possible ki mai kahi genuinely kaam me fasa hua hu... but i promise when u need me and there's even a slight change i can be there for you, i will be there for you. i am sorry for causing you emotional hurt all year long and making u believe that when u need someone there is no one for u. i promise from now on, there will be someone who will listen to u too and be there in your tough times... and that will be me and my 69 other personalities 😁",
    "So finally lets just put all the 2024 drama behind us and maybe try having a fresh start where we have a better stronger relationship where we learn from the mistakes of the past. Also, i wanted to say that do not feel any kind of \"physical\" stress that i may have caused you lately i want to say that tu jitna extreme soch rhi is bare me mujhe leke waisa kuch bhi nhi h its not like i wanna do everything ab ekdumse... its just that its good to kept reminded now and then that everything's gonna happen at some time :)) which doesnt mean kal hi krlena hai.. waise to i believe i have pushed us back ig around 1 more year and no i dont have any problem with that. i will respect each and every decision made by u and respond to it in a healthy way i dont wanna be a jerk geetansh gandhi from 2024. Also we are very weak even emotionally right now we are lacking understanding of each other... and its more like im lacking it so yes i will work on that and we will be stronger together 💪🏽💪🏽. i will listen u more and then uk process from your pov rather than uk getting all selfish about anything",
    "Also im writing this on 29th so yayyyyyyyy happppppyyyyyyyyyy uuussssssssssss baaaaabyyyyyyyyyyyyy 3.5 years kaat liye apan ne ek dusre ko jhelte huye 😄 haste huye rote huye khushi me dukhi me tum hmesha mere sath rahi (maybe mai nhi rha mentioned above) and i love you so much and i will love you for much more than 3.5 more years ahead <3333",
    "So ig this is a wrap from my side for 2024. it wasnt the best one for us. but it has taught me many many things about us how can we be good how can i be a better bf like understand u more, be lil less sex addicted or lol tharak thodi sar ke neeche rakhu and maybe if possible be richie rich. I hope we grow boht hi zyada in 2025 and be together all along. even if mishaps happen we still get thru them easily without causing any permanent trauma to each other. but anyways i want all the happiness and the best things for u, with or without me :)) I hope i am a good guy for u and i took a good decision healthy for both of us when i kept u rather than letting u go. I love you till forever ends 💖",
    "Stay ❤️",
    "Yours sincerely and lovingly",
    "Giu"
];
