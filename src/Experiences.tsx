import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function Experiences() {
  return (
    <Tabs defaultValue='experience'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='experience'>Experience</TabsTrigger>
        <TabsTrigger value='education'>Education</TabsTrigger>
      </TabsList>
      <TabsContent value='experience'>
        <div className='grid grid-cols-12 text-start gap-3 my-6'>
          <aside className='text-start sm:text-end col-span-full sm:col-span-4'>
            <p className='text-xs text-muted-foreground'>Sep.2018 - Nov. 2018</p>
            <p className='text-sm font-bold'>Junior Frontend Web Developer</p>
            <p className='text-xs text-blue-500'>ROC.PH Digital Marketing Services</p>
          </aside>
          <ul className='px-2 w-full border-s col-span-full sm:col-span-8'>
            <li className='flex flex-col'>
              <p className='text-sm'>Frontend Web Development</p>
              <span className='text-xs text-muted-foreground px-2 mb-2'>
                Modify homepage UI of the company website using HTML, CSS and Javascript.
              </span>
            </li>
            <li className='flex flex-col'>
              <p className='text-sm'>Data Entry</p>
              <span className='text-xs text-muted-foreground px-2'>
                Managed and sorted data for the company.
              </span>
            </li>
            <li className=''></li>
            <li className=''></li>
          </ul>
          <aside className='text-start sm:text-end col-span-full sm:col-span-4 mt-6'>
            <p className='text-xs text-muted-foreground'>Oct.2022 - Dec. 2022</p>
            <p className='text-sm font-bold'>Information Technology Intern</p>
            <p className='text-xs text-blue-500'>Phosclay Chemical Manufacturing</p>
          </aside>
          <ul className='px-2 w-full border-s col-span-full sm:col-span-8 mt-6'>
            <li className='flex flex-col'>
              <p className='text-sm'>Frontend Web Development</p>
              <span className='text-xs text-muted-foreground px-2 mb-2'>
                Modify website layout and UI using HTML, CSS and Javascript.
              </span>
            </li>
            <li className='flex flex-col'>
              <p className='text-sm'>Graphic Design & Video Editing</p>
              <span className='text-xs text-muted-foreground px-2 mb-2'>
                Created video montages and publication advertisements for product promotion of the
                company.
              </span>
            </li>
            <li className='flex flex-col'>
              <p className='text-sm'>Social Media Manager</p>
              <span className='text-xs text-muted-foreground px-2'>
                Promoting company social media platforms through Facebook Meta.
              </span>
            </li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent value='education'>
        <div className='grid grid-cols-12 text-start gap-3 my-6'>
          <aside className='text-start sm:text-end col-span-full sm:col-span-4'>
            <p className='text-xs text-muted-foreground'>June. 2017 - April. 2019</p>
            <p className='text-sm font-bold'>Graduated Senior High School - K12 Curriculum</p>
            <p className='text-xs text-blue-500'>AMA Computer College Cavite Campus</p>
          </aside>
          <ul className='px-2 w-full border-s col-span-full sm:col-span-8'>
            <li className='flex flex-col'>
              <p className='text-sm'>TVL - ICT Programming</p>
              <span className='text-xs text-muted-foreground px-2 mb-2'>
                Pursue TVL ICT Programming for a web-development future dream job.
              </span>
            </li>
            <li className='flex flex-col'>
              <p className='text-sm'>Grade 12 - Honors</p>
              <span className='text-xs text-muted-foreground px-2'>
                Received an award and was named to the honored list in Grade 12.
              </span>
            </li>
            <li className=''></li>
            <li className=''></li>
          </ul>
          <aside className='text-start sm:text-end col-span-full sm:col-span-4 mt-6'>
            <p className='text-xs text-muted-foreground'>June. 2019 - Oct. 2023</p>
            <p className='text-sm font-bold'>Graduated College - BSIT</p>
            <p className='text-xs text-blue-500'>AMA Computer College Cavite Campus</p>
          </aside>
          <ul className='px-2 w-full border-s col-span-full sm:col-span-8 mt-6'>
            <li className='flex flex-col'>
              <p className='text-sm'>Bachelor of Science in Information Technology</p>
              <span className='text-xs text-muted-foreground px-2 mb-2'>
                I like web development and frontend website designing.
              </span>
            </li>
            <li className='flex flex-col'>
              <p className='text-sm'>Major in Web Development</p>
              <span className='text-xs text-muted-foreground px-2 mb-2'>
                Picked web development as major elective in first year.
              </span>
            </li>
            <li className='flex flex-col'>
              <p className='text-sm'>Magna Cum Laude</p>
              <span className='text-xs text-muted-foreground px-2'>
                Graduated with High Distinction Award(Magna Cum Laude).
              </span>
            </li>
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
}
