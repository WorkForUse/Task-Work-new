import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/mockData";

export default function FlashSale() {
  const [activeFilter, setActiveFilter] = useState("Newest");
  const filters = ["All", "Newest", "Popular", "Clothes"];

  return (
    <section>
      <div className="sd-flash-head">
        <h2>Flash Sale</h2>
        <div className="sd-timer">
          Closing in: <b>02</b> : <b>12</b> : <b>56</b>
        </div>
        <div className="sd-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="sd-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}