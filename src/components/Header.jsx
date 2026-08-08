import React from "react";
import { FiSearch, FiSliders, FiBell, FiHeart, FiShoppingBag, FiMessageSquare, FiUser, FiChevronDown } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header>
      <div className="sd-topbar">
        <div className="sd-brand brand-font">
          Shop<span>ly.</span>
        </div>

        <div className="sd-location">
          <small>Location</small>
          <div className="val">
            <IoLocationOutline size={16} /> New York, USA <FiChevronDown size={12} />
          </div>
        </div>

        <div className="sd-search-wrap">
          <button className="sd-icon-btn" style={{ background: "transparent", color: "var(--red)" }}>
            <FiSearch size={18} />
          </button>
          <input type="text" placeholder="Search for products, brands and more" />
          <button className="sd-icon-btn">
            <FiSliders size={18} />
          </button>
        </div>

        <div className="sd-top-actions">
          <div className="sd-action">
            <FiBell size={20} />
            <span>Alerts</span>
          </div>
          <div className="sd-action">
            <FiHeart size={20} />
            <span>Wishlist</span>
          </div>
          <div className="sd-action">
            <FiShoppingBag size={20} />
            <span>Cart</span>
          </div>
          <div className="sd-action">
            <FiMessageSquare size={20} />
            <span>Chat</span>
          </div>
          <div className="sd-action">
            <FiUser size={20} />
            <span>Profile</span>
          </div>
        </div>
      </div>

      <nav className="sd-subnav">
        <a href="#" className="active">Home</a>
        <a href="#">Clothes</a>
        <a href="#">Electronics</a>
        <a href="#">Shoes</a>
        <a href="#">Watches</a>
        <a href="#">Deals</a>
      </nav>
    </header>
  );
}