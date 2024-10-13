function TopSlider({ image1, image2 }) {
  return (
    <div className="h-80 bg-[#f7f7f7] flex flex-col justify-center align-center">
      <img
        src={image1}
        alt="heading"
        className=" max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl my-5 mx-auto"
      />
      <img
        src={image2}
        alt="button"
        className=" max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
      />
    </div>
  );
}

export default TopSlider;
