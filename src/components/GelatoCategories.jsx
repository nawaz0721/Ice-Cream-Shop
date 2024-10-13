import images1 from "../images/perfect-image1.jpg.png";
import images2 from "../images/perfect-image2.jpg.png";
import images3 from "../images/perfect-image3.jpg.png";
import images4 from "../images/perfect-image4.jpg.png";
import heading from "../images/Find Your Perfect Gelato.png";

const GelatoCategories = () => {
  const categories = [
    {
      name: "Classic Flavors",
      image: images1,
      link: "/classic-flavors",
    },
    {
      name: "Seasonal Specials",
      image: images2,
      link: "/seasonal-specials",
    },
    {
      name: "Gelato Cakes",
      image: images3,
      link: "/gelato-cakes",
    },
    {
      name: "Gelato Pints",
      image: images4,
      link: "/gelato-pints",
    },
  ];

  return (
    <div className="gelato-categories">
      <div className="title">
        {/* Find Your Perfect <span>Gelato</span> */}
        <img src={heading} alt="Find Your Perfect Gelato" />
      </div>
      <p className="subtitle">
        Browse through our different gelato offerings to find your favorite.
      </p>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <div className="category-info">
              <h2>{category.name}</h2>
              <a href={category.link} className="category-button">
                <span>&#10132;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GelatoCategories;
