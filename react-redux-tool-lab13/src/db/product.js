import store from "../store";

const products = [
  {
    id: 1,
    name: "Trà sữa TocoToco vị dâu",
    price: 40000,
  },
  {
    id: 2,
    name: "Trà sữa trân châu hoàng gia",
    price: 35000,
  },
  {
    id: 3,
    name: "Cafe Glass Jelly Milk",
    price: 30000,
  },
  {
    id: 4,
    name: "Cafe Rich",
    price: 45000,
  },
];

export const getAllProducts = () => products;
export const getProductsById = (id) => products.find((p) => p.id == id);
