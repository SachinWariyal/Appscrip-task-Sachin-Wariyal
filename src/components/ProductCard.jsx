
import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="card-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="price-info"><span style={{ textDecoration: 'underline', cursor: 'pointer', text : 'bold' }}>Sign in</span> or Create an account to see pricing</p>
      </div>
      <div className="favorite"><span className="icon heart"> <img
            src="/heart.png"
            alt="Brand Icon"
            className="brand-icon"
          /></span></div>
    </div>
  );
}

export default ProductCard;
