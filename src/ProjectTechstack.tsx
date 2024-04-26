import HTML from "./assets/techstack/html5.png";
import CSS3 from "./assets/techstack/css3.png";
import JS from "./assets/techstack/javascript.svg";
import React from "./assets/techstack/react.svg";
import Tailwind from "./assets/techstack/tailwind.svg";
import Typescript from "./assets/techstack/typescript.svg";
import ReactRouter from "./assets/techstack/react-router.svg";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

const ProjectTechstack = () => {
  return (
    <div>
      <div className='flex flex-wrap gap-1.5 col-span-3 my-2 ml-2'>
        {/* HTML Tooltip */}
        <TooltipProvider delayDuration={90} skipDelayDuration={60}>
          <Tooltip>
            <TooltipTrigger>
              <img src={HTML} alt='html5-icon' className='w-[20px]' />
            </TooltipTrigger>
            <TooltipContent>
              <p>HTML5</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* CSS3 Tooltip */}
        <TooltipProvider delayDuration={90} skipDelayDuration={60}>
          <Tooltip>
            <TooltipTrigger>
              <img src={CSS3} alt='css3-icon' className='w-[20px]' />
            </TooltipTrigger>
            <TooltipContent>
              <p>CSS3</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Javascript Tooltip */}
        <TooltipProvider delayDuration={90} skipDelayDuration={60}>
          <Tooltip>
            <TooltipTrigger>
              <img src={JS} alt='javascript-icon' className='w-[22px] rounded-sm mt-[3px]' />
            </TooltipTrigger>
            <TooltipContent>
              <p>Javascript</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Typescript Tooltip */}
        <TooltipProvider delayDuration={90} skipDelayDuration={60}>
          <Tooltip>
            <TooltipTrigger>
              <img
                src={Typescript}
                alt='typescript-icon'
                className='w-[22px] rounded-sm mt-[3px]'
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Typescript</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* ReactJS Tooltip */}
        <TooltipProvider delayDuration={90} skipDelayDuration={60}>
          <Tooltip>
            <TooltipTrigger>
              <img src={React} alt='reactjs-icon' className='w-[22px] rounded-sm mt-[3px]' />
            </TooltipTrigger>
            <TooltipContent>
              <p>ReactJS</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* TailwindCSS Tooltip */}
        <TooltipProvider delayDuration={90} skipDelayDuration={60}>
          <Tooltip>
            <TooltipTrigger>
              <img src={Tailwind} alt='tailwindcss-icon' className='w-[22px] mt-[3px]' />
            </TooltipTrigger>
            <TooltipContent>
              <p>TailwindCSS</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* React Router Tooltip */}
        <TooltipProvider delayDuration={90} skipDelayDuration={60}>
          <Tooltip>
            <TooltipTrigger>
              <img src={ReactRouter} alt='react-router-icon' className='w-[25px] mt-[3px]' />
            </TooltipTrigger>
            <TooltipContent>
              <p>React Router</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ProjectTechstack;
