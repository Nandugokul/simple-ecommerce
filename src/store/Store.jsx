import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
  price: 0,
  productImage: "i.jpg",
  productName: "name",
  productId: "id",
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
    },
  },
});

export const cartSliceActions = cartUpdate.actions;
const store = configureStore({ reducer: { cartUpdate: cartUpdate.reducer } });
export default store;
