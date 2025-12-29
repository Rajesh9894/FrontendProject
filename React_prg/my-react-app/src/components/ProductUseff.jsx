import React, { useEffect, useState } from "react";
import "../App.css";

export default function Product() {
  const [data, setData] = useState([]);

  const api = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    console.log("Product mounted");
    api();

    return () => {
      console.log("Product unmounted (LOGGED OUT)");
    };
  }, []);

  return (
    <>
      <h1>PRODUCTS</h1>

      <div className="product">
        {data.map((de) => (
          <div className="card" key={de.id}>
            <div className="badge">HOT SALE</div>

            <div className="tilt">
              <div className="img">
                <img src={de.image} alt={de.title} />
              </div>
            </div>

            <div className="info">
              <div className="cat">{de.category}</div>
              <h2 className="title">{de.title}</h2>
              <p className="desc">{de.description}</p>

              <div className="bottom">
                <div className="price">
                  <span className="old">{de.price + 200}</span>
                  <span className="new">{de.price}</span>
                </div>

                <button className="btn">
                  <span>Add to Cart</span>
                  <svg
                    className="icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                </button>
              </div>

              <div className="meta">
                <div className="rating">
                  <span className="rcount">
                    {Array.from({
                      length: Math.round(de.rating.rate),
                    }).map((_, i) => (
                      <span key={i}>{star.image}</span>
                    ))}
                  </span>

                  <span> ({de.rating.rate}) </span>
                  <span className="rcount">{de.rating.count}</span>
                </div>

                <div className="stock">In Stock</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}