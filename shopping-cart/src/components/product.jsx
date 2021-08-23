import "./product.css";

let Product = () => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img
          src="https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt=""
        />
      </div>
      <div className="product-btn">
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
