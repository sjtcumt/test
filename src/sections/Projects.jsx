import { ProjectCard } from "../components";
import { projects } from "../constants";
const Projects = () => {
  return (
    <search id="projects" className=" max-container max-sm:mt-12">
      <div className=" flex flex-col justify-start gap-5">
        <h2 className=" text-4xl font-palanquin font-bold">
          <span className=" text-coral-red">Projects </span> Gallery
        </h2>
        <p className=" lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Kill Clam And Carry On.
        </p>
      </div>
      <div className="mt-16 flex justify-center flex-col items-center gap-10">
        {projects.map(project => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </search>
  );
};
export default Projects;
