import { configureStore, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  quantity: 0,
  price: 0,
  productImage: "i.jpg",
  productName: "name",
  productId: "id",
  productPrice: 0,
  cartItems: [],
  totalCartValue: 0,
};

const cartUpdate = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    getItemToCart(state, actions) {
      let dataReceived = actions.payload;
      state.price = dataReceived.price;
      state.quantity = dataReceived.quantity;
      state.productImage = dataReceived.productImage;
      state.productName = dataReceived.productName;
      state.productId = dataReceived.productId;
      state.productPrice = dataReceived.productPrice;
      const receivedItem = { ...actions.payload, uniqueId: uuidv4() };
      state.cartItems = [...state.cartItems, receivedItem];
      state.totalCartValue =
        state.totalCartValue +
        dataReceived.quantity * dataReceived.productPrice;
      toast.success("Item added!");
    },
    removeItem(state, actions) {
      let uniqueId = actions.payload;
      const filteredArray = state.cartItems.filter(
        (item) => item.uniqueId !== uniqueId
      );
      state.cartItems = filteredArray;
      state.totalCartValue = state.cartItems.reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);
      toast.error("Item removed");
    },
    changeQuantity(state, action) {
      const { func, uniqueId } = action.payload;

      state.cartItems = state.cartItems.map((item) =>
        item.uniqueId === uniqueId
          ? {
              ...item,
              quantity:
                func === "dec" && item.quantity > 1
                  ? item.quantity - 1
                  : func === "inc"
                  ? item.quantity + 1
                  : item.quantity,
            }
          : item
      );

      state.totalCartValue = state.cartItems.reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);
    },
  },
});
export const cartSliceActions = cartUpdate.actions;
const store = configureStore({ reducer: { cartUpdate: cartUpdate.reducer } });
export default store;
