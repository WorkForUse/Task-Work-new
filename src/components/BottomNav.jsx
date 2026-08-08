import React from "react";
import { FiHome, FiHeart, FiShoppingBag, FiMessageSquare, FiUser } from "react-icons/fi";

export default function BottomNav() {
  return (
    <nav className="mobile-bottom-nav">
      <a href="#" className="mobile-nav-item active">
        <FiHome size={20} />
        <span>Home</span>
      </a>
      <a href="#" className="mobile-nav-item">
        <FiHeart size={20} />
        <span>Wishlist</span>
      </a>
      <a href="#" className="mobile-nav-item">
        <FiShoppingBag size={20} />
        <span>Cart</span>
      </a>
      <a href="#" className="mobile-nav-item">
        <FiMessageSquare size={20} />
        <span>Chat</span>
      </a>
      <a href="#" className="mobile-nav-item">
        <FiUser size={20} />
        <span>Profile</span>
      </a>
    </nav>
  );
}