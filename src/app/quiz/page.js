"use client"

import React from 'react'
import QuestionSection from '../components/QuestionSection';
import Image from 'next/image';
import logo from "public/logo.svg"
import hanging_design_left from "public/hanging_design_left/hanging_design_left@2x.png"
import hanging_design_right from "public/hanging_design_right/hanging_design_right@2x.png"
import star_0 from "public/star_0/star_0@2x.png"
import star_1 from "public/star_1/star_1@2x.png"
import star_2 from "public/star_2/star_2@2x.png"
import snow_flake_0 from "public/snow_flake_0.svg"
import snow_flake_1 from "public/snow_flake_1.svg"
import snow_flake_2 from "public/snow_flake_2.svg"

const page = () => {
  return (
    <main className="flex h-screen flex-col items-center bg-funds-india bg-cover bg-fixed relative">
      <QuestionSection/>
    </main>
  )
}

export default page