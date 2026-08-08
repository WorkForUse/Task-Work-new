import React from "react";

export default function Hero() {
  return (
    <>
      <div className="sd-section-head">
        <h2>#SpecialForYou</h2>
        <a href="#">See All</a>
      </div>

      <div className="sd-hero">
        <div className="sd-hero-main">
          <span className="sd-badge">Limited time!</span>
          <h1>Get Special Offer</h1>
          <div className="sd-pct">
            Up to <br />
            <b style={{ fontSize: "52px" }}>
              40<sup style={{ fontSize: "26px", color: "var(--red)" }}>%</sup>
            </b>
          </div>
          <div className="sd-hero-foot">
            <span style={{ fontSize: "12px", opacity: 0.85 }}>All Services Available · T&C Applied </span>
            <button className="sd-claim-btn brand-font">Claim Now</button>
          </div>
        </div>

        <div className="sd-hero-side">
          <div className="sd-side-card">
            <h3>New Arrivals</h3>
            <p>Fresh styles dropped this week</p>
          </div>
          <div className="sd-side-card">
            <h3>Free Shipping</h3>
            <p>On orders over $50</p>
          </div>
        </div>
      </div>
    </>
  );
}