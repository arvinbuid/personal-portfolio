import Techstack from "./Techstack";
import logo from "./assets/ab-logo.png";

const Skills = () => {
  return (
    <>
      <section className='flex flex-wrap items-center justify-center mb-10 md:mb-0 md:gap-2  '>
        <img className='w-[80px]' src={logo} alt='' />
        <article className='text-center sm:text-start'>
          <h1 className='text-4xl font-bold md:text-5xl'>Arvin Buid</h1>
          <p>Web Developer</p>
        </article>
      </section>
      <div className='grid grid-cols-12 mt-[10px'>
        <div className='flex flex-col items-center justify-center col-span-full sm:col-span-6 h-[300px] '>
          <h1 className='text-xl font-bold text-primary mb-2'>Skill</h1>
          <p className='text-center text-sm max-w-[250px] mb-1 mt-5'>My Tech Stack for Web Dev</p>
          <p className='text-sm text-center text-muted-foreground max-w-[350px] lg:text-xs sm:mx-5'>
            Hello. I'm Arvin Buid, a web developer from Cavite Philippines. I am comfortable working
            with frontend stacks like HTML, CSS, Javascript, and React.js but I can also work with
            the backend technologies like Node.js and PHP. I am passionate and constantly learning
            new technologies to utilize in my personal projects and real world job.
          </p>
        </div>
        <Techstack />
      </div>
    </>
  );
};

export default Skills;
