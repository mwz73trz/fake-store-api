function Product(props) {
  return (
    <div>
      <h2>{props.product.title}</h2>
      <h3>{props.product.description}</h3>
      <h3>${props.product.price}</h3>
      <img src={props.product.image} alt="Product"></img>
    </div>
  );
}

export default Product;
