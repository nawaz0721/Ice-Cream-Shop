import React from "react";
import heading1 from "../images/Heading 1 → 404.png";
import heading2 from "../images/Sorry! The Page Not Found.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="bg-[#7272] flex flex-col justify-center items-center h-screen gap-y-6">
        <img src={heading1} alt="Thank you image" />
        <img src={heading2} alt="Thank you image" />
        <Link to={"/"}>
          <Button text={"← Back to Home"} css={"contact-btn"} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
