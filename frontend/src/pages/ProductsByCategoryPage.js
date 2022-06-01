import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsByCategory from "../components/ProductsByCategory";
import fakeStoreAPI from "../api/FakeStoreAPI";

function ProductsByCategoryPage(props) {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const loadProducts = async () => {
      let data = await fakeStoreAPI.getProductsByCategory(params.category);
      setProducts(data);
    };
    loadProducts();
  }, [params.category]);

  const renderProducts = () => {
    return products.map((product, index) => {
      return <ProductsByCategory key={index} product={product} />;
    });
  };

  return (
    <div>
      <h1>Products in {params.category} Category</h1>
      {renderProducts()}
    </div>
  );
}

export default ProductsByCategoryPage;
