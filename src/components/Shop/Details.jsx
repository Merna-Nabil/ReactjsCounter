import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./shop.css";
const Details = () => {
  const params = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  const [product, setProduct] = useState({});
  return (
    <div className="details">
      <div>
        <img style={{ width: "200px" }} src={product.image} alt="" />
      </div>
      <div className="info">
        <span>{product.title}</span>
        <span>Price: {product.price}$</span>
      </div>
    </div>
  );
};

export default Details;
