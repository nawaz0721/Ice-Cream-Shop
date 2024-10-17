import ProductDetails from "../components/ProductDetails";
import TopSlider from "../components/TopSlider";
import heading1 from "../images/Heading 1 → Single Product Layout 01.png";
import heading2 from "../images/Background+Shadow(product detail).png";
import product1 from "../images/Figure → classic-image1.png.png";
import product2 from "../images/Figure → classic-image2.png.png";
import product3 from "../images/Figure → classic-image3.png.png";
import product4 from "../images/Figure → classic-image4.png.png";
import product5 from "../images/Figure → seller-image1.png.png";
import product6 from "../images/Figure → seller-image2.png.png";
import product7 from "../images/perfect-image1.jpg.png";
import product8 from "../images/vegan-image1.jpg.png";
import product9 from "../images/vegan-image2.jpg.png";
import product10 from "../images/vegan-image3.jpg.png";
import product13 from "../images/popular-image1.png.png";
import product14 from "../images/popular-image2.png.png";
import product15 from "../images/popular-image3.png.png";
import product16 from "../images/flover-image1.png.png";
import product17 from "../images/flover-image2.png.png";
import product18 from "../images/flover-image3.png.png";
import heading from "../images/Related Products.png";
import { useParams } from "react-router";
import ProductsTabs from "../components/ProductsTabs";
import ProductSlider from "../components/ProductSlider";
import NotFound from "./NotFound";

const ProductDetail = () => {
  const products = [
    {
      id: 1,
      name: "Classic Vanilla Ice Cream",
      description: "Creamy vanilla ice cream topped with cherry",
      price: 5.49,
      rating: 4.9,
      category: "Canned Ice Cream",
      image: product1,
    },
    {
      id: 2,
      name: "Chocolate Brownie Sundae",
      description: "Rich chocolate ice cream with chunks of brownie.",
      price: 5.49,
      rating: 4.9,
      category: "Sundaes",
      image: product2,
    },
    {
      id: 3,
      name: "Strawberry Shortcake",
      description: "Strawberry ice cream layered with shortcake.",
      price: 5.29,
      rating: 4.9,
      category: "Ice Cream Cakes",
      image: product3,
    },
    {
      id: 4,
      name: "Chocolate Fudge Brownie",
      description: "Rich chocolate ice cream with chunks of fudge brownie.",
      price: 6.49,
      rating: 4.8,
      category: "Ice Cream Cakes",
      image: product4,
    },
    {
      id: 5,
      name: "Mint Chocolate Chip Delight",
      description: "Cool mint ice cream with dark chocolate chips.",
      price: 5.99,
      rating: 4.7,
      category: "Ice Cream Pints",
      image: product5,
    },
    {
      id: 6,
      name: "Salted Caramel Crunch",
      description:
        "Caramel ice cream with a hint of sea salt and crunchy bits.",
      price: 6.79,
      rating: 4.6,
      category: "Ice Cream Pints",
      image: product6,
    },
    {
      id: 7,
      name: "Classic Flavors",
      description:
        "Caramel ice cream with a hint of sea salt and crunchy bits.",
      price: 7.34,
      rating: 5.0,
      category: "Canned Ice Cream",
      image: product7,
    },
    {
      id: 8,
      name: "Seasonal Specials",
      description: "Creamy coconut ice cream topped with shredded coconut.",
      price: 5.94,
      rating: 4.3,
      category: "Sundaes",
      image: product8,
    },
    {
      id: 9,
      name: "Gelato Cake",
      description: "A blend of chocolate, vanilla, and strawberry ice cream.",
      price: 6.01,
      rating: 4.6,
      category: "Ice Cream Cakes",
      image: product9,
    },
    {
      id: 10,
      name: "Gelato Pints",
      description: "Vanilla ice cream with chunks of chocolate cookies.",
      price: 7.93,
      rating: 4,
      category: "Ice Cream Pints",
      image: product10,
    },
    {
      id: 13,
      name: "Coconut Paradise",
      description: "Creamy coconut ice cream topped with shredded coconut.",
      price: 6.19,
      rating: 4.5,
      category: "Ice Cream Pints",
      image: product13,
    },
    {
      id: 14,
      name: "Cookies and Cream",
      description: "Vanilla ice cream with chunks of chocolate cookies.",
      price: 5.89,
      rating: 4.8,
      category: "Ice Cream Pints",
      image: product14,
    },
    {
      id: 15,
      name: "Raspberry Ripple",
      description: "Vanilla ice cream swirled with fresh raspberry sauce.",
      price: 5.79,
      rating: 4.7,
      category: "Ice Cream Pints",
      image: product15,
    },
    {
      id: 16,
      name: "Pistachio Dream",
      description: "Pistachio ice cream with roasted pistachio pieces.",
      price: 6.39,
      rating: 4.8,
      category: "Ice Cream Pints",
      image: product16,
    },
    {
      id: 17,
      name: "Neapolitan Trio",
      description: "A blend of chocolate, vanilla, and strawberry ice cream.",
      price: 7.29,
      rating: 4.9,
      category: "Ice Cream Cakes",
      image: product17,
    },
    {
      id: 18,
      name: "Coffee Crunch",
      description: "Coffee ice cream with caramelized sugar bits.",
      price: 6.49,
      rating: 4.7,
      category: "Ice Cream Pints",
      image: product18,
    },
  ];

  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <NotFound />;
  }

  return (
    <div>
      <TopSlider image1={heading1} image2={heading2} />

      <ProductDetails product={product} />
      <ProductsTabs />
      <div className="py-6">
        <ProductSlider
          mainheading={heading}
          subtext={"Choose from some of related products!"}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
