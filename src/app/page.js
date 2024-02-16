"use client"

import { useEffect, useState } from 'react'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import Image from 'next/image';
import Lottie from 'lottie-react';

import logo from "public/logo.svg"
import hanging_design_left from "public/hanging_design_left/hanging_design_left@2x.png"
import hanging_design_right from "public/hanging_design_right/hanging_design_right@2x.png"
import star_0 from "public/star_0/star_0@2x.png"
import star_1 from "public/star_1/star_1@2x.png"
import star_2 from "public/star_2/star_2@2x.png"
import snow_flake_0 from "public/snow_flake_0.svg"
import snow_flake_1 from "public/snow_flake_1.svg"
import snow_flake_2 from "public/snow_flake_2.svg"
import Rocket_Single from "public/Rocket_Single.json"
import QuestionSection from './components/QuestionSection';

export default function Home() {

  const endTime = '2023-01-01T00:00:00';

  const [showContent, setShowContent] = useState("");
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showAnimation, setShowAnimation] = useState({
    topLeftRocket1: false,
    topRightRocket1: false,
    topRightRocket2: false,
    topRightRocket3: false,
  })

  useEffect(()=>{

    if (new Date() >= new Date(endTime)) {
      setShowContent("Get Set Go");
    }
    else {
      setShowContent("date");
    }

    setTimeout(() => {
      setShowAnimation( state => ({...state, topLeftRocket1:true}))
    }, 500);
    setTimeout(() => {
      setShowAnimation( state => ({...state, topRightRocket1:true}))
    }, 100);
    setTimeout(() => {
      setShowAnimation( state => ({...state, topRightRocket2:true}))
    }, 900);
    setTimeout(() => {
      setShowAnimation( state => ({...state, topRightRocket3:true}))
    }, 1400);
  },[])

  return (
    <main className="flex h-screen w-screen overflow-hidden flex-col items-center bg-funds-india bg-cover bg-fixed relative">
      <div className='bg-[#ffffff95] h-[70px] w-[80%] rounded-b-[35px] flex items-center justify-between px-[30px] shadow-[0px_5px_16px_#00000019] [backdrop-filter:blur(40px)] [-webkit-backdrop-filter:blur(40px)] relative z-[1] shrink-0 '>
        <Image src={logo} alt='logo'/>
        <button className='p-[8px_30px] text-[14px] bg-[#e6eefe] shadow-[0_5px_6px_rgba(0,0,0,.098)] rounded-[50px] text-[#0161ff] font-semibold '>Signup</button>
        <Image src={snow_flake_0} className='absolute bottom-[-50px] left-[35px]' />
      </div>

      <h1 className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[175px] leading-[183px] font-semibold text-[#0161FF] opacity-[0.1] pointer-events-none select-none whitespace-nowrap ${showContent == "Get Set Go" && " animate-pulse "} `}>{(showContent == "Get Set Go")?"Get Set Go":"Countdown"}</h1>
      <Image src={hanging_design_left} className='w-[100px] absolute top-[-25px] left-[20px] select-none'/>
      <Image src={hanging_design_right} className='w-[100px] absolute top-0 right-[10px] select-none'/>
      <Image src={snow_flake_1} className='absolute top-[50%] translate-y-[-10%] right-[60px] select-none'/>
      <Image src={star_0} className='absolute top-[62%] translate-y-[10%] left-[25px] w-[50px] select-none'/>
      <Image src={star_1} className='absolute bottom-[20px] left-[100px] w-[50px] select-none'/>
      <Image src={star_2} className='absolute bottom-[110px] right-[50px] w-[65px] select-none'/>
      <Image src={snow_flake_2} className='absolute bottom-[40px] right-[90px] select-none'/>
      <Lottie animationData={Rocket_Single} loop={true} className='absolute h-[280px] w-[280px] left-[20px] top-[50%]' />
      <Lottie animationData={Rocket_Single} loop={true} className='absolute h-[206px] w-[206px] right-[3%] top-[45%] translate-y-[-50%]' />
      {showAnimation.topLeftRocket1 && <Lottie animationData={Rocket_Single} loop={true} className='absolute w-[480px] left-[-190px] top-[-175px]' />}
      <Lottie animationData={Rocket_Single} loop={true} className='absolute w-[310px] left-[90px] top-[-60px]' />
      {showAnimation.topRightRocket1 && <Lottie animationData={Rocket_Single} loop={true} className='absolute w-[280px] right-[140px] top-[-90px]' />}
      {showAnimation.topRightRocket3 && <Lottie animationData={Rocket_Single} loop={true} className='absolute w-[300px] right-[-70px] top-[-160px]' />}
      {showAnimation.topRightRocket2 && <Lottie animationData={Rocket_Single} loop={true} className='absolute w-[320px] right-[-100px] top-[20px]' />}

      <div className='flex flex-col items-center h-full justify-center px-[150px] '>
        {showContent=="date" && 
          <>
          <h1 className='text-[40px] text-[#1B1C20] font-semibold'>Focus on the <span className='text-[#0161FF]'><span className='relative'>Re<div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[3px] bg-[#0161FF] w-[53px] border-[3px] border-[#0161FF] mt-[2px] ' /></span>Solutions</span></h1>
          <div className='bg-[#0161FF] h-[2px] w-[60px] mt-[10px] rounded-[5px] '/>
          <p className='text-[16px] text-[#464143] font-medium mt-[20px] '>Resolutions are old! It’s time to work on solutions. We have put together a set of 10 questions to assess your understanding of Mutual Funds.</p>
          <h1 className='text-[22px] text-[#1B1C20] font-semibold mt-[22px] mb-[44px] '>The campaign goes live in</h1>

          <FlipClockCountdown
            to={new Date(endTime)} 
            labelStyle={{ fontSize: 15, fontWeight: 600, color:"#0161FF", paddingTop:"5px"}}
            digitBlockStyle={{height:"115px", width:"80px", background:"white", margin:"0px 7px", color:"black", fontSize: '70px', fontWeight: 600, borderRadius: "30px 10px", border:"2px solid #FFFFFF", boxShadow: "inset 0px 4px 6px #72727226, 0px 3px 5px #505C621A"}}
            dividerStyle={{ color: 'white', height: 0 }}
            showSeparators={false}
            separatorStyle={{size:"50px"}}
            onComplete={()=>setShowContent("Get Set Go")}
          />
          
          <h3 className='text-[18px] text-[#464143] font-semibold mt-[30px] '>Do not miss out on this. We will send you a reminder on WhatsApp and Mail when the campaign goes live.</h3>
          <div className='border-[2px] border-[white] bg-[white] rounded-[30px_10px] px-[25px] py-[20px] flex gap-x-[25px] shadow-[0px_3px_5px_#505C6227] mt-[20px]'>
            <div className='gap-y-[8px] flex flex-col'>
              <label className='text-[#777777] text-[14px] font-medium'>Email</label>
              <input 
                className='h-[40px] w-[300px] border-[1px] border-[#B5B5B5] rounded-[33px] px-[20px]'
                value={email}
                placeholder='Your email address'
                onChange={(event)=>setEmail(event.target.value)}
                type='email'
              />
            </div>
            <div className='gap-y-[8px] flex flex-col'>
              <label className='text-[#777777] text-[14px] font-medium'>Phone Number</label>
              <input 
                className='h-[40px] w-[300px] border-[1px] border-[#B5B5B5] rounded-[33px] px-[20px]'
                value={phone}
                placeholder='Your Phone Number'
                onChange={(event)=>setPhone(event.target.value)}
                type='number'
              />
            </div>
            <button className='h-[40px] w-[300px] bg-[#00D382] rounded-[33px] text-[16px] font-semibold text-[white] self-end '>Get Notified</button>
          </div>
          </>
        }
        {
          showContent == "Get Set Go" &&
          <>
            <p className='text-[16px] text-[#464143] font-medium mt-[20px] text-center'>Explore the depth of your Mutual Funds knowledge with these 10 questions designed to assess your understanding. See how well you understand different situations related to Mutual Funds. Are you up for the challenge? Let’s see how you do!</p>
            <h1 className='text-[40px] text-[#0161FF] font-semibold mt-[72px]'>Get, Set, Go!!!</h1>
            <button onClick={() => setShowContent("question")} className='h-[40px] w-[300px] bg-[#00D382] rounded-[33px] text-[16px] font-semibold text-[white] mt-[110px] '>Get Started</button>
          </>
        }
        {
          showContent == "question" &&
          <QuestionSection />
        }
      </div>
    </main>
  )
}
