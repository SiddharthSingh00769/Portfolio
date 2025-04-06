"use client"
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs, SiCplusplus} from 'react-icons/si'

const about = {
  title: 'About Me',
  description: 'I am a software developer with a passion for building scalable and efficient applications.',
  info: [
    {
      fieldName: "Name", 
      fieldValue: "Siddharth Singh"
    },
    {
      fieldName: "Phone", 
      fieldValue: "(+91) 8112574531"
    },
    {
      fieldName: "Nationality", 
      fieldValue: "Indian"
    },
    {
      fieldName: "Email", 
      fieldValue: "sid018singh@gmail.com"
    },
    {
      fieldName: "Freelance", 
      fieldValue: "Available"
    },
    {
      fieldName: "Languages", 
      fieldValue: "English, Hindi"
    },
  ]
};

const education = {
  icon: '/assets/noun-education-1100140.svg',
  title: 'My Education',
  description: 'I am pursuing my Bachelor of Engineering in Computer Science and Engineering.',
  items: [
    {
      institution: 'Pranveer Singh Institute Of Technology',
      degree: 'Bachelor of Technology in Computer Science and Engineering - CGPA: 8.4',
      duration: "2022-Present"
    },
    {
      institution: 'Dr. Virendra Swaroop Education Centre',
      degree: 'Class XII - Percentage: 88%',
      duration: "2021-2022"
    }
  ]
}

const skills = {
  title: 'My Skills',
  description: 'I have expertise in the following technologies.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML'
    },
    {
      icon: <FaCss3 />,
      name: 'CSS'
    },
    {
      icon: <FaJs />,
      name: 'JavaScript'
    },
    {
      icon: <FaReact />,
      name: 'React'
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js'
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS'
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js'
    },
    {
      icon: <SiCplusplus />,
      name: 'C++'
    }
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
    }}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs defaultValue="education" className="flex flex-col xl:flex-row">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about me">About Me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full pt-5 xl:pt-1 xl:pl-10'>
            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className='bg-[#232329] h-[300px] sm:h-[230px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.institution}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.degree}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] text-center xl:text-left'>
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about me" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-xl'>{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
