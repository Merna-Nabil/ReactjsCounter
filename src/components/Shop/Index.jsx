import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./shop.css";
import { addToCart } from "../../redux/cartslice";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  const handleAddToCart = (prod) => {
    dispatch(addToCart(prod));
  };

  return (
    <div className="parent">
      {products.map((product) => {
        return (
          <div className="product">
            <Link
              to={`/shop/${product.id}`}
              key={product.id}
              className="prod-wrap "
            >
              <img className="image" src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="btn"
              type="button"
            >
              Add To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
