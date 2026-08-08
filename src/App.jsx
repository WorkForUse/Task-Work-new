import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FlashSale from "./components/FlashSale";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="sd-root">
      <Header />
      <main className="sd-main">
        <Hero />
        <Categories />
        <FlashSale />
        <BottomNav/>
      </main>
    </div>
  );
}