import React from "react";
import HeroSlider from "../components/home/HeroSlider";
import Sorting from "../components/home/Sorting";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";

function Home() {
  return (
    <div className="my-6 space-y-6">
      <HeroSlider />
      <hr />
      <Sorting />
      <div className="flex items-center">
        <Categories />
        <Products />
      </div>
    </div>
  );
}

export default Home;
