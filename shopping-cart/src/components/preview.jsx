import "./preview.css";

let Preview = () => {
  return (
    <>
      <div className="preview-container">
        <div className="preview-img-container">
          <img src="https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
        </div>

        <div className="preview-listing">
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste
            voluptas iusto earum reprehenderit sequi ratione quae numquam
            ducimus ab assumenda ex, culpa, ipsam doloribus laborum sit vitae
            delectus rem nam! Optio similique sunt, ut perferendis doloribus
            nihil. Molestiae dolorem, voluptate eum vel deserunt commodi ut.
            Ipsa ipsam cupiditate incidunt.
          </p>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Preview;
