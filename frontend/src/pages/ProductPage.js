import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fakeStoreAPI from "../api/FakeStoreAPI";
import Product from "../components/Product";

function ProductPage(props) {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      let data = await fakeStoreAPI.getProductById(params.id);
      setProduct(data);
    };
    loadProduct();
  }, [params.id]);

  const renderProduct = () => {
    if (!product) {
      return null;
    }
    return <Product product={product} />;
  };

  return (
    <div>
      <h1>Product Details</h1>
      {renderProduct()}
    </div>
  );
}

export default ProductPage;
