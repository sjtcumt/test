import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";
const SpecialOffer = () => {
  return (
    <section className=" flex  justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className=" object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className=" text-4xl font-palanquin  capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span>
          <span> Offer</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Find definitions and references for functions and other symbols in
          this file by clicking a symbol below or in the code.
        </p>
        <p className="mt-4 lg:max-w-lg info-text ">
          Discover For your active life.
        </p>
        <div className="mt-11 flex  flex-wrap gap-4">
          <Button label="View Details" />
          <Button label="Learn More" backgroundColor="bg-white" />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffer;
