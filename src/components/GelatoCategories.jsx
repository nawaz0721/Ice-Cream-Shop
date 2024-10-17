import images1 from "../images/perfect-image1.jpg.png";
import images2 from "../images/perfect-image2.jpg.png";
import images3 from "../images/perfect-image3.jpg.png";
import images4 from "../images/perfect-image4.jpg.png";
import heading from "../images/Find Your Perfect Gelato.png";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const GelatoCategories = () => {
  const categories = [
    {
      id: 7,
      name: "Classic Flavors",
      image: images1,
    },
    {
      id: 8,
      name: "Seasonal Specials",
      image: images2,
    },
    {
      id: 9,
      name: "Gelato Cakes",
      image: images3,
    },
    {
      id: 10,
      name: "Gelato Pints",
      image: images4,
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
              <Link to={`/shop/${category.id}`}>
                <span className="category-button">&#10132;</span>
              </Link>
              {/* <a href={category.link} className="category-button"></a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GelatoCategories;
