import { useDispatch, useSelector } from "react-redux";
import { removeCreator } from "../redux/actions";
let Cart = () => {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let filteredArr = state.filter((el) => el.qty > 0);
  let total = 0;
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredArr.map((el, index) => {
            let amount = el.qty * el.price;
            total += amount;
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>Rs {el.price}</td>
                <td>{el.qty}</td>
                <td>Rs {amount}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(removeCreator(el.id));
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cart;
