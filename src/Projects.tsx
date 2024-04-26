import pokemon from "./assets/pokemon-app.png";
import ecommerce from "./assets/e-commerce.png";
import HTML from "./assets/techstack/html5.png";
import CSS3 from "./assets/techstack/css3.png";
import JS from "./assets/techstack/javascript.svg";
import React from "./assets/techstack/react.svg";
import Tailwind from "./assets/techstack/tailwind.svg";
import Typescript from "./assets/techstack/typescript.svg";
import Axios from "./assets/techstack/axios.svg";
import ProjectTechstack from "./ProjectTechstack";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

const Projects = () => {
  return (
    <>
      <div className='text-start p-5'>
        <h3 className='text-xl font-bold text-primary text-start'>My Projects</h3>
        <p className='text-muted-foreground'>My recent projects: </p>
      </div>
      {/* Projects */}
      <div className='flex flex-wrap gap-3 items-center justify-center'>
        {/* pokemon api */}
        <aside className='flex flex-col border rounded overflow-hidden h-full w-full shadow m-auto max-w-[300px]'>
          <div className='relative h-[180px] overflow-hidden flex justify-center'>
            <img
              src={pokemon}
              alt='pokemon app'
              className='ease-in-out duration-100 w-[300px] hover:scale-105 object-contain'
            />
          </div>
          <div className='flex flex-col ml-4 pt-2 items-start'>
            <div>
              <h5 className='text-lg font-semibold text-start'>Pokemon App</h5>
              <p className='flex items-center gap-1 text-blue-500 text-xs'>PERSONAL PROJECT</p>
            </div>
          </div>
          <div className='flex flex-col justify-between gap-2 px-2 h-full'>
            <p className='text-sm text-start text-muted-foreground ml-1.5 mt-2'>
              Web-based application to search the stats of all the pokemons up to the latest.
              Responsive to any device and has a dark mode feature to give the users a much better
              experience when using the application in the night.
            </p>
            {/* techstack icons */}

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

              {/* Axios Tooltip */}
              <TooltipProvider delayDuration={90} skipDelayDuration={60}>
                <Tooltip>
                  <TooltipTrigger>
                    <img src={Axios} alt='tailwindcss-icon' className='w-[22px] mt-[3px]' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Axios</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* github source code button*/}
            <div className='flex justify-self-end gap-2 mt-1'>
              <a
                href='https://github.com/arvinbuid/react-vite-search-pokemon-app'
                className='text-xs w-full'
              >
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                    <path d='M9 18c-4.51 2-5-2-7-2'></path>
                  </svg>
                  Source Code
                </button>
              </a>
            </div>
          </div>
        </aside>
        {/* e-commerce */}
        <aside className='flex flex-col border rounded overflow-hidden h-full w-full shadow m-auto max-w-[300px]'>
          <div className='relative h-[180px] overflow-hidden flex justify-center'>
            <img
              src={ecommerce}
              alt='e-commerce'
              className='ease-in-out duration-100 w-full hover:scale-105 object-contain object-center'
            />
          </div>
          <div className='flex flex-col ml-4 pt-2 items-start'>
            <div>
              <h5 className='text-lg font-semibold text-start'>E-Commerce</h5>
              <p className='flex items-center gap-1 text-blue-500 text-xs'>PERSONAL PROJECT</p>
            </div>
          </div>
          <div className='flex flex-col justify-between gap-2 px-2 h-full'>
            <p className='text-sm text-start text-muted-foreground ml-1.5 mt-2'>
              E-Commerce Website made with ReactJS that has a functionality to add and delete items
              from the cart. Responsive to any device to give the users a much better experience
              browsing through their phone or tablet.
            </p>
            {/* techstack icons */}
            <ProjectTechstack />

            {/* github source code button*/}
            <div className='flex justify-self-end gap-2 mt-1'>
              <a href='https://github.com/arvinbuid/react-e-commerce' className='text-xs w-full'>
                <button className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mb-2 flex gap-1 items-center justify-center w-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-10 w-10 p-2 text-blue-600'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                    <path d='M9 18c-4.51 2-5-2-7-2'></path>
                  </svg>
                  Source Code
                </button>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Projects;
