import { dataBase } from "../firebase/firebase";

export const createOrder = async (order) => {
  const orders = await dataBase().collection("orders");
  return orders
    .add(order)
    .then((response) => {
      order.id = response.id;
      return order;
    })
    .catch((e) => {
      console.log(e);
    });
};
