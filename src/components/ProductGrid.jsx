
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import "./ProductGrid.css";

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="products-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductGrid;
