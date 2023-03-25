import React from "react";
import Product from "../products/Product";
function Main() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default Main;
