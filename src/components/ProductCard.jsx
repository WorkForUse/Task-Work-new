import React from "react";
import { FiHeart, FiStar } from "react-icons/fi";

export default function ProductCard({ product }) {
  return (
    <div className="sd-product">
      <div
        className="sd-imgwrap"
        style={{ backgroundImage: `url('${product.img}')` }}
      >
        <span className="sd-off-tag">{product.off}</span>
        <div className="sd-heart">
          <FiHeart size={16} />
        </div>
      </div>
      <div style={{ padding: "16px" }}>
        <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "6px" }}>
          {product.name}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
          <span style={{ color: "var(--red)", fontWeight: 700, fontSize: "15px" }}>
            {product.now}
          </span>
          <span style={{ color: "#B7B7BC", fontSize: "12px", textDecoration: "line-through" }}>
            {product.was}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px" }}>
          <div style={{ fontSize: "12px", color: "var(--gray)", display: "flex", alignItems: "center", gap: "4px" }}>
            <FiStar size={12} fill="gold" stroke="none" /> {product.rating}
          </div>
          <div style={{ fontSize: "11px", color: "#B7B7BC" }}>{product.sold}</div>
        </div>
      </div>
    </div>
  );
}