import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

let initialState = [
  {
    id: 0,
    name: "Palm Phone",
    img: "https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    price: 10000,
    qty: 0,
  },
  {
    id: 1,
    name: "Kia Car",
    img: "https://www.kia.com/us/content/dam/kia/us/en/home/hero/sorento_2021/foreground/kia_homepage_mobile_hero_foreground.png",
    price: 1000000,
    qty: 0,
  },
  {
    id: 2,
    name: "PS4",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PS4-Console-wDS4.png/1200px-PS4-Console-wDS4.png",
    qty: 0,
  },
];

let reducer = (state = initialState, action) => {
  let cp = [];
  let id = -1;
  switch (action.type) {
    case ADD_TO_CART:
      cp = state.map((el) => el);
      id = action.payload;
      cp[id].qty = cp[id].qty + 1;
      return cp;

    case REMOVE_FROM_CART:
      cp = state.map((el) => el);
      id = action.payload;
      if (cp[id].qty > 0) cp[id].qty = cp[id].qty - 1;
      return cp;

    default:
      return state;
  }
};

export default reducer;
