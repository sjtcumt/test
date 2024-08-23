import { useState } from "react";
import { Button, ShoeCard } from "../components";

import { arrowRight } from "../assets/icons";
import { statistics, shoes, personData } from "../constants";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { FaTelegram, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="about"
      className="  w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="'relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className=" text-lg font-montserrat text-coral-red">
          A Fullstack Developer
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[60px] max-sm:leading-[80px] font-bold">
          <span className=" xl:bg-white my-20 xl:whitespace-nowrap relative z-10 pr-10">
            Hey, I'm <span className=" text-coral-red inline-block">Alan</span>{" "}
            Shi
          </span>
        </h1>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[60px] max-sm:leading-[80px] font-bold">
          <span className=" my-8 xl:whitespace-nowrap relative z-10 pr-10">
            A <span className=" text-coral-red inline-block">Web3</span>
            <br />
            Developer
          </span>
        </h1>
        <p className=" font-mono text-slate-gray text-lg leading-8 mt-6">
          Always Learning New Things.
        </p>
        <div className=" py-3">
          <a href={personData.resume}>
            <Button label="Get Resume" iconURL={arrowRight} />
          </a>
        </div>

        <div className="flex justify-around items-start flex-wrap w-full mt-20 gap-16">
          {personData.socialLinks.map(item => (
            <div key={item.label}>
              <a href={item.link}>
                {item.name == "github" && (
                  <BsGithub className=" text-coral-red" size={50} />
                )}
                {item.name == "linkedin" && (
                  <BsLinkedin className="text-coral-red" size={50} />
                )}
                {item.name == "telegram" && (
                  <FaTelegram className="text-coral-red" size={50} />
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className=" object-contain relative bg-transparent"
        />
      </div>
    </section>
  );
};
export default Hero;
