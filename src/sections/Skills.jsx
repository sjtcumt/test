import { SkillCard } from "../components";
import { skills } from "../constants";
const Skills = () => {
  return (
    <search id="skills" className=" max-container max-sm:mt-12">
      <div className=" flex flex-col justify-start gap-5">
        <h2 className=" text-4xl font-palanquin font-bold">
          Certified <span className=" text-coral-red">Skills </span>
        </h2>
        <p className=" lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Kill Clam And Carry On.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {skills.map(skill => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </search>
  );
};
export default Skills;
