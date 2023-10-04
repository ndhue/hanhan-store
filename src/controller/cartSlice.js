import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: window.sessionStorage.getItem("carts") ? JSON.parse(window.sessionStorage.getItem("carts")) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };
        state.carts.push(temp);
      }
      window.sessionStorage.setItem("carts", JSON.stringify(state.carts))
    },
    removeItem: (state, action) => {
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
      if (state.carts[itemIndex].qty > 1) {
        state.carts[itemIndex].qty -= 1;
      } else {
        state.carts.splice(itemIndex, 1);
      }
      window.sessionStorage.setItem("carts", JSON.stringify(state.carts))
    },
    remove: (state, action) => {
      const data = state.carts.filter((el) => el.id !== action.payload);
      state.carts = data;
      window.sessionStorage.setItem("carts", JSON.stringify(state.carts))
    },
    updateItemQuantity: (state, action) => {
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.item.id);
      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += action.payload.quantity;
      } else {
        const temp = { ...action.payload.item, qty: action.payload.quantity };
        state.carts.push(temp);
      }
      window.sessionStorage.setItem("carts", JSON.stringify(state.carts))
    },
    deleteCart:(state, action)=> {
      state.carts = []
    }
  },
});

export const { addItem, removeItem, remove, updateItemQuantity, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
