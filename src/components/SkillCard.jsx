import { star } from "../assets/icons";

const SkillCard = ({ imgURL, name, link }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <a href={link}>
        <img src={imgURL} alt={name} className=" w-[280px] h-[200px]" />
        <p className=" mt-2 text-xl  py-5 font-palanquin file:leading-normal ">
          {name}
        </p>
      </a>
    </div>
  );
};

export default SkillCard;
