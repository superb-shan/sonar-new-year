import React, { useState } from 'react'
import score_popper from '/public/score/score_popper.json'
import Lottie from 'lottie-react';
import { CircularProgressbarWithChildren , buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import tick from '/public/tick.svg'
import Image from 'next/image';

const QuestionSection = () => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [isAnimationVisible, setIsAnimationVisible] = useState(true);
    const [getNotifiedClicked, setGetNotifiedClicked] = useState(false);

    const quiz = [
        {
            question : "Is it possible to start investing with a small amount of money?",
            answer: "Yes",
            hint: "Mutual Funds allow investors to start small with just ₹1000. With compounding and long term investment, one can build up significant amount of wealth. Read more about compounding here:",
            link: "https://www.fundsindia.com/blog/mf-research/we-keep-hearing-about-the-magic-of-equity-sip-but-where-is-it/26576"
        }, 
        {
            question : "Is it a good time to start investing when the market is at an all-time high?",
            answer: "Yes",
            hint: "There isn't a bad time to invest. Today's high might be the lowers in a 10 year horizon.",
            link: ""
        },
        {
            question : "Is it wise to follow a friend's advice when my portfolio is not performing well?",
            answer: "No",
            hint: "It is advisable to listen to your financial expert.If your funds are underperforming, read this blog:",
            link: "https://www.fundsindia.com/blog/mf-research/should-you-be-worried-about-your-underperforming-funds/27024"
        },
        {
            question : "Is investing in mutual funds a good strategy for achieving retirement goals?",
            answer: "Yes",
            hint: "Mutual funds can be a very good investment option for a variety of investment goals, including retirement.",
            link: ""
        },
        {
            question : "Should I trust a stranger's promise to double my investments in a short period?",
            answer: "No",
            hint: "Always do your own research and take the advice given by a trusted financial expert.",
            link: ""
        },
        {
            question : "Is it okay to invest in a mutual fund based on reputation without checking historical performance and other details?",
            answer: "No",
            hint: "While it is a part of the process of selecting a mutual fund, you shouldn't completely rely on reputation alone. This blog would help you get some insight:",
            link: "https://www.fundsindia.com/blog/mf-research/how-to-avoid-behavioral-blindspots-in-your-investment-decisions-while-still-remaining-human/26695"
        },
        {
            question : "Is mutual fund investment a suitable option for tax-saving purposes?",
            answer: "Yes",
            hint: "ELSS funds may be the kind of mutual funds you're looking for. More on this blog:",
            link: "https://www.fundsindia.com/blog/mf-research/mutual-funds/all-you-wanted-to-know-about-elss-funds/12397"
        },
        {
            question : "Should I stop investing and withdraw my money when the market falls?",
            answer: "No",
            hint: "Market falls doesn't need to be the end of your investment. Let's learn more about market falls here:",
            link: "https://www.fundsindia.com/blog/mf-research/what-goes-wrong-when-you-exit-equities-hoping-to-reenter-later-at-lower-levels/24537"
        },
        {
            question : "Can I choose high-risk schemes for my mutual fund investments?",
            answer: "Yes",
            hint: "Only if you have an appetite for a high risk. We do not recommend this for beginners.",
            link: ""
        },
        {
            question : "Can I withdraw profits from my portfolio if it's currently showing a positive return in 6 months?",
            answer: "No",
            hint: "Though the choice is yours but we wouldn’t advise that.",
            link: ""
        },
    ]

    const handleSelection = (event) => {
        if (selectedAnswer === null )
            setSelectedAnswer(event.target.value === 'yes' ? true : false)
    }

    const handleNext = () => {
        setSelectedAnswer(null);
        if (currentQuestionIndex < quiz.length - 1){
            if ((quiz[currentQuestionIndex].answer === 'Yes' && selectedAnswer) || quiz[currentQuestionIndex].answer !== 'Yes' && !selectedAnswer)
                setScore(curr => curr+1);
            setCurrentQuestionIndex((curr) => curr+1);
        }
        else{
            if ((quiz[currentQuestionIndex].answer === 'Yes' && selectedAnswer) || quiz[currentQuestionIndex].answer !== 'Yes' && !selectedAnswer)
                setScore(curr => curr+1);
            setIsSubmitted(true);
        }
    }

    const onAnimationComplete = () => {
        setIsAnimationVisible(false);
      };

  return (
    <div className='w-full'>
        {

            (isSubmitted && !getNotifiedClicked) &&
            (
                // Score Section
                <page className="flex flex-col items-center gap-[20px] relative w-full">
                    {isAnimationVisible && 
                        <Lottie 
                            animationData={score_popper} 
                            loop={false} 
                            className='absolute z-50 w-[520px] h-[693px] top-[-100px]'
                            onComplete={onAnimationComplete}
                            isStopped={!isAnimationVisible}
                            isPaused={!isAnimationVisible}
                        />
                    }
                    <div className='w-[80%] h-[539px] bg-[#FFFFFF] bg-no-repeat shadow-[0px_3px_5px_#505C6227] border-2 border-white rounded-[60px_20px_60px_30px] bg-opacity-40 backdrop-blur-[30px] flex items-center flex-col p-[20px] gap-[20px]'>
                        <div className='flex flex-col items-center mb-[10px]'>
                            <h1 className='text-[40px] font-semibold'>Your <span className='text-[#0161FF]'>Score</span></h1>
                            <div className='mt-[10px] bg-[#0161FF] w-[59px] h-[2px] '></div>
                        </div>

                        {/* progress bar */}
                        <CircularProgressbarWithChildren 
                            className='max-w-[250px]'
                            value={score*10}
                            circleRatio={0.65}
                            strokeWidth={6}
                            styles={buildStyles({
                                rotation: 1 / 2 + 1.2 / 6.85,
                                strokeLinecap: "round",
                                trailColor: "#ccdfff",
                                pathColor: '#0161FF',
                                textColor: "#1b1c20",
                                textSize: "20px",               
                            })}
                        >
                            <div className='flex flex-col justify-center items-center gap-[15px]'>
                                <p className='font-semibold text-[18px] -mt-[20px]'>Good</p>
                                <p className='font-semibold text-[50px] '>{score+"/"+quiz.length}</p>
                            </div>
                        </CircularProgressbarWithChildren>


                        <div className='text-[#464143] leading-[24px] text-[16px] font-medium text-center px-[50px] -mt-[40px]'>
                            {
                                (score >=0 && score <= 3) &&
                                    <div>The joy of learning Mutual Funds right from the start is the most exciting part of all. And what better than a certified coach to explain it to you for FREE?<br/>Let us help you get started.</div> ||
                                (score >= 4 && score <= 7) &&
                                    <div>Your knowledge of Mutual Funds is admirable. You are almost there among the Gurus! But a bit more understanding can make your investment journey smooth and interesting. </div> ||
                                (score >= 8 && score <= 10) &&
                                    <div>Hurray! You're among the top scores and we're proud that you've been a part of our challenge. If you're NEW to FundsIndia, then make this NEW YEAR a bit more special by opening your FREE investment account with us.</div>
                            }
                        </div>

                        {/* Signup */}
                        <button className='h-[40px] w-[300px] bg-[#00D382] rounded-[33px] text-[16px] font-semibold text-[white] mt-[20px]' onClick={() => setGetNotifiedClicked(true)}>Get Notified</button>
                    </div>
                </page>
            )

            ||

            (getNotifiedClicked && isSubmitted) &&
            (
                //Thank you section
                <page className="flex flex-col items-center gap-[20px] relative w-full">
                    <div className='w-[80%] h-[539px] bg-[#FFFFFF] bg-no-repeat shadow-[0px_3px_5px_#505C6227] border-2 border-white rounded-[60px_20px_60px_30px] bg-opacity-40 backdrop-blur-[30px] flex items-center justify-center flex-col p-[20px] gap-[20px]'>
                        <Image src={tick} />
                        <div className='w-[80%] text-center font-medium text-[#464143] mt-[20px]'>
                            Thank you for spending your valuable time in taking up our challenge.
                            <br/>
                            Your participation is highly appreciated!
                        </div>
                        <div className='w-[80%] text-center font-medium text-[#464143]'>
                            FundsIndia wishes you a very Happy New Year 2024 - May this NEW YEAR be filled with abundant joy and happiness for you and your family
                        </div>
                    </div>
                </page>
            )

            ||

            (
                // questions section
                <page className="flex flex-col items-center gap-[20px] w-full">
                    <div className='flex flex-col items-center'>
                        <h1 className='text-[40px] font-semibold'>Focus on the <span className='text-[#0161FF]'><del>Re</del>Solutions</span></h1>
                        <div className='mt-[10px] bg-[#0161FF] w-[59px] h-[2px] '></div>
                    </div>
                    <p className='font-medium text-[16px] text-[#464143] w-[1011px] text-center leading-[28px]'>
                        Explore the depth of your Mutual Funds knowledge with these 10 questions designed to assess your understanding. See how well you understand different situations related to Mutual Funds. Are you up for the challenge? Let's see how you do!
                    </p>
                    <div className='w-[80%] min-h-[380px] bg-[#FFFFFF] bg-no-repeat shadow-[0px_3px_5px_#505C6227] border-2 border-white rounded-[60px_20px_60px_30px] bg-opacity-40 backdrop-blur-[30px] flex items-center flex-col p-[20px] gap-[20px]'>
                        <p className='font-medium text-[16px] text-[#464143] '>Question {currentQuestionIndex + 1} / {quiz.length}</p>
                        <p className='text-[16px] font-semibold text-[#464143]'>{quiz[currentQuestionIndex].question}</p>
                        <div className='flex gap-[20px]'>
                            <button 
                                className={`w-[80px] h-[40px]  bg-no-repeat shadow-[0px_3px_5px_#505C6227] border-2 ${selectedAnswer? 'bg-[#B2DFFC] border-[#0161FF]' : 'bg-[#E5E5E5] border-white'} rounded-[27px] backdrop-blur-[30px] text-[14px] font-bold`}
                                onClick={handleSelection}
                                value='yes'
                            >
                                Yes
                            </button>
                            <button 
                                className={`w-[80px] h-[40px]  bg-no-repeat shadow-[0px_3px_5px_#505C6227] border-2 ${selectedAnswer === false? 'bg-[#B2DFFC] border-[#0161FF]' : 'bg-[#E5E5E5] border-white'} rounded-[27px] backdrop-blur-[30px] text-[14px] font-bold`}
                                onClick={handleSelection}
                                value='no'
                            >
                                No
                            </button>
                        </div>
                        <div className={`w-[90%] h-[120px] bg-[#F2F2F2] bg-no-repeat shadow-[0px_3px_5px_#505C6227] border-2 border-white rounded-[20px] backdrop-blur-[30px] ${selectedAnswer === null ? 'invisible' : ''}`}>
                            <div className={`w-[115px] h-[31px] text-white shadow-[0px_3px_5px_#505C6227] border-2 ${ (selectedAnswer === true && quiz[currentQuestionIndex].answer === "Yes") || (selectedAnswer === false && quiz[currentQuestionIndex].answer === "No") ? "bg-[#09D382] border-[#09D382]" : "bg-[#F98B45] border-[#F98B45]" }  rounded-[18px_0px] text-[14px] font-semibold flex justify-center items-center`}>
                                Ans : {quiz[currentQuestionIndex].answer}
                            </div>
                            <div className='mx-[25px] mt-[10px] text-[14px] font-medium indent-[10px] text-center'>
                                {quiz[currentQuestionIndex].hint} <span className='text-[#0161FF]'><a href={quiz[currentQuestionIndex].link}>{quiz[currentQuestionIndex].link}</a></span>
                            </div>
                        </div>
                        <button 
                            className={`w-[184px] h-[40px] bg-[#00D382] text-white font-semibold mt-[5px] rounded-[33px] ${selectedAnswer !== null ? "opacity-100" : "opacity-50"}`} 
                            disabled={selectedAnswer === null}
                            onClick={handleNext}
                        >
                            {quiz.length === currentQuestionIndex + 1 ? "Submit" : "Next"}
                        </button>
                    </div>
                </page>
            )
        }
    </div>
  )
}

export default QuestionSection