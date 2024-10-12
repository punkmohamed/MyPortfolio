
import { skills } from '@/data';
import './skills.css'
import { InfiniteMovingCards } from './ui/InfiniteCards';

const Skills = () => {
  return (
    <div className="app__skills" id="skills">
      <h1 className="heading">
        My <span className="text-purple">Skills</span>
      </h1>
      <div
        // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
        className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
      >
        <InfiniteMovingCards
          items={skills}
          direction="right"
          speed="slow"
        />
      </div>

    </div>
  );
};

export default Skills;
