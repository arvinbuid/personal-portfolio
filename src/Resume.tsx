import kafka from "./assets/kafka-icon.png";
import resume from "../public/work-resume.pdf";

const Resume = () => {
  return (
    <section className='grid grid-cols-12 rounded border-y p-2'>
      <div className='col-span-full sm:col-span-4 py-4 '>
        <div className='h-full hidden sm:block'>
          <div className='flex items-center justify-center h-full'>
            <img className='w-[170px] rounded-sm' src={kafka} alt='logo' />
          </div>
        </div>
      </div>
      <article className='col-span-full sm:col-span-8 sm:border-s p-2'>
        <div className='text-start p-5'>
          <h3 className='text-xl font-bold text-primary text-start'>Resume</h3>
          <p className='text-muted-foreground'>Download my resume below.</p>
        </div>
        <aside className='flex flex-wrap flex-start pl-9 gap-3'>
          {/* resume */}
          <a
            href={resume}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 hover:text-blue-600'
          >
            <div className='flex items-center'>
              {/* resume svg*/}
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
                <path d='M12 5v14M5 12l7 7 7-7'></path>
              </svg>

              <div>Resume</div>
            </div>
          </a>
        </aside>
      </article>
    </section>
  );
};

export default Resume;
