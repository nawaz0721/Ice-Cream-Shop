import React from "react";
import heading1 from "../images/thankyou-image.png.png";
import heading2 from "../images/Thank You!.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="bg-[#7272] flex flex-col justify-center items-center h-screen gap-y-6">
      <img src={heading1} alt="Thank you image" />
      <img src={heading2} alt="Thank you image" />
      <p>
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
