import { useState, useEffect } from "react";
import data from '../data.json';

function Slider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
        console.log(data.product)
      setProducts(data.product);
    }
    fetchData();
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div>
          <img src={product.imagelink} alt={product.imagename} />
          {product.imagename}
          {product.price}
        </div>
      ))}
    </div>
  );
}

export default Slider;