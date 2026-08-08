import React from "react";
import { categories } from "../data/mockData";

export default function Categories() {
  return (
    <section>
      <div className="sd-section-head">
        <h2>Category</h2>
        <a href="#">See All</a>
      </div>

      <div className="sd-categories">
        {categories.map((cat, index) => {
          const IconComponent = cat.icon;
          return (
            <div className="sd-cat" key={index}>
              <div className="sd-cat-icon">
                <IconComponent />
              </div>
              <div className="brand-font" style={{ fontSize: "13px", fontWeight: 600 }}>
                {cat.name}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}