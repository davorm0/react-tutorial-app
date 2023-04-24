import React, { useEffect, useState } from "react";

interface ProductListProps {
  category: string;
}

const ProductList = ({ category }: ProductListProps) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log(`Fetching products in ${category}`);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return (
    <>
      <h1>ProductList</h1>
      {products.map((product) => (
        <p>{product}</p>
      ))}
    </>
  );
};

export default ProductList;
