import { Link } from "react-router-dom";

function ProductsByCategory(props) {
  return (
    <div>
      <Link to={`products/${props.product.id}`}>
        {props.product.id} {props.product.title}
      </Link>
    </div>
  );
}
export default ProductsByCategory;
