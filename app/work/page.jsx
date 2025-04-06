"use client"
import { motion } from "framer-motion"
import React, { useState } from "react"

import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/ui/WorkSliderBtns"

const projects = [
  {
    num: '01',
    category: "Full Stack",
    title: "VideoGen(AI Short Video Generator)",
    description: "The AI Short Video Generator is a full-stack application designed to automate the creation of engaging short videos using advanced artificial intelligence techniques. This project leverages a robust backend powered by machine learning algorithms to analyze user inputs, such as text prompts or images, and generate dynamic video content. The frontend features an intuitive user interface that allows users to easily customize their videos with various themes, captions, and genres.",
    stack: [{ name: "Next.js" }, { name: "React.js" }, { name: "Tailwind CSS" }, { name: "Convex" }],
    image: '/assets/work/thumb3.png',
    live: 'https://www.aishortsvid.com/',
    github: 'https://github.com/SiddharthSingh00769/AI-Short-Video-Generator',
  },
  {
    num: '02',
    category: "Frontend",
    title: "PlayBeat",
    description: "A sleek frontend application designed to provide users with an immersive multimedia experience. Featuring an intuitive interface, it allows users to seamlessly browse, play, and manage their music and movie collections. This project enhances user engagement and enjoyment, making it easy to discover and enjoy favorite tracks and films in one convenient platform.",
    stack: [{ name: "HTML 5" }, { name: "Tailwind CSS" }, { name: "JavaScript" }],
    image: '/assets/work/thumb11.png',
    live: '',
    github: 'https://github.com/SiddharthSingh00769/PlayBeat',
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section 
    initial={{ opacity: 0 }} 
        animate={{ 
        opacity: 1, 
        transition: {delay: 1.6, duration: 0.6, ease: "easeIn"}, 
        }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[10px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{project.category} Project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">{project.stack.map((item, index) => {
                return <li className="text-sm xl:text-xl text-accent" key={index}>
                  {item.name}
                  {index !== project.stack.length - 1 && ","}
                  </li>
              }) }</ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:rotate-45 duration-300">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30} 
            slidesPerView={1} 
            className="xl:h-[520px] mb-12 xl:mb-0"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[330px] xl:h-[465px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 botom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-full h-full">
                    <Image src={project.image} fill className="object-fill" alt=""></Image>
                  </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-[#00e187] text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
