import { useHistory } from "react-router-dom";
import "./product.css";

let Product = (props) => {
  let history = useHistory();
  return (
    <div className="product-card">
      <div
        onClick={() => {
          history.push(`/preview/${props.data.id}`);
        }}
        className="product-img"
      >
        <img src={props.data.img} />
      </div>
      <div className="product-btn">
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
