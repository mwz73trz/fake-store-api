import { Link } from "react-router-dom";

function Categories(props) {
  return (
    <div>
      <Link to={`products/category/${props.category}/`}>{props.category}</Link>
    </div>
  );
}

export default Categories;
