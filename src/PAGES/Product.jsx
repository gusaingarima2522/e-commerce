import React from 'react';
import ProductCard from './ProductCard';
import product from './productsData';

function Products() {
  return (
    <div class="products-container">
      {/* {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))} */}
      {product.map((item)=>(
      <ProductCard key={item.id} product={item}/>
     ))}

    </div>
  );
}

export default Products;
