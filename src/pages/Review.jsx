import TopSlider from "../components/TopSlider";
import heading1 from "../images/Heading 1 → Review.png";
import heading2 from "../images/Background+Shadow(review).png";
import heading3 from "../images/Hear From Our Gelato Enthusiasts.png";

import React from "react";
import TestimonialCard from "../components/TestimonialCard ";

const Review = () => {
  return (
    <div>
      <TopSlider image1={heading1} image2={heading2} />
      <div>
        <div className="flex flex-col items-center justify-center my-4">
          <img src={heading3} />
          <p className="font-semibold my-4">
            Read testimonials from those who have enjoyed our artisan gelato.
          </p>
        </div>
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Review;
