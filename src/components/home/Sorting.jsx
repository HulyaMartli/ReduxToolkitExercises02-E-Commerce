import React from "react";

const Sorting = () => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl">ALL PRODUCTS</h2>
      <select
        name=""
        id=""
        className="rounded-lg py-3 text-center outline-none"
      >
        <option value="" selected disabled>
          Filter by
        </option>
        <option value="increasing">Price: Low to High</option>
        <option value="decreasing">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Sorting;
