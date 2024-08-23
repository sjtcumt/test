import { arrowRight } from "../assets/icons";
const ProjectCard = ({ imgURL, name, demoURL, codeURL, description }) => {
  return (
    <div className="flex  max-md:flex-col justify-between rounded-[20px] shadow-3xl px-10 py-16 gap-5">
      <div className=" flex flex-col">
        <h1 className=" text-xl font-montserrat leading-normal ">{name}</h1>
        <div className=" pt-3 flex w-full justify-start gap-5">
          <a href={codeURL}>
            <div className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white">
              Code
              <img src={arrowRight} alt="" width={25} height={25} />
            </div>
          </a>

          <a href={demoURL} className="">
            <div className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white">
              Live Demo
              <img src={arrowRight} alt="" width={25} height={25} />
            </div>
          </a>
        </div>
        <p className=" *:mt-6 max-w-sm text-center info-text ">{description}</p>
      </div>

      <a href="">
        <img src={imgURL} alt={name} className=" w-[500px] h-[350px]" />
      </a>
    </div>
  );
};

export default ProjectCard;
