import { reviews } from "../constants";
import { ReviewCard } from "../components";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className=" font-palanquin text-center text-4xl font-bold">
        What Our <span className=" text-coral-red">Customers</span> Say?
      </h3>
      <p className=" info-text m-auto mt-4 max-w-lg text-center">
        Find definitions and references for functions and other symbols in this
        file by clicking a symbol below or in the code.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
        {reviews.map(review => (
          <ReviewCard
            key={review.customerName}
            customerName={review.customerName}
            imgURL={review.imgURL}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
