import React from "react";
import heading1 from "../images/thankyou-image.png";
import heading2 from "../images/Thank You!.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="bg-[#f5f5f5] flex flex-col justify-center items-center h-screen gap-y-6 p-4 text-center">
      <img
        src={heading1}
        alt="Thank you image"
        className="w-full max-w-xs md:max-w-sm lg:max-w-md"
      />

      <img
        src={heading2}
        alt="Thank you text"
        className="w-full max-w-xs md:max-w-sm lg:max-w-md"
      />

      <p className="text-gray-600 px-4 sm:px-6 md:px-8 lg:px-12 max-w-lg leading-relaxed">
        We're delighted you've decided to treat yourself to our delectable ice
        creams. Your order has been received and is now being prepared with
        care.
      </p>

      <Link to={"/"}>
        <Button text={"← Back to Home"} css={"contact-btn"} />
      </Link>
    </div>
  );
};

export default Thankyou;
