// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [], // Cart items
//   totalQuantity: 0, // Total quantity of items in the cart
//   totalPrice: 0, // Total price of all items
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItem(state, action) {
//       const newItem = action.payload;
//       const existingItem = state.items.find(
//         (item) =>
//           item.title === newItem.title &&
//           JSON.stringify(item.ingredients) === JSON.stringify(newItem.ingredients) &&
//           JSON.stringify(item.toppings) === JSON.stringify(newItem.toppings) &&
//           item.size === newItem.size
//       );

//       if (existingItem) {
//         existingItem.quantity += 1;
//         existingItem.totalPrice += parseFloat(newItem.price);
//       } else {
//         state.items.push({
//           ...newItem,
//           // quantity: 1,
//           totalPrice: parseFloat(newItem.price),
//         });
//       }
//       state.totalQuantity += 1;
//       state.totalPrice += parseFloat(newItem.price);
//     },
//     removeItem(state, action) {
//       const index = action.payload;
//       const existingItem = state.items[index];
//       if (existingItem) {
//         state.totalQuantity -= existingItem.quantity;
//         state.totalPrice -= existingItem.price;
//         state.items.splice(index, 1); // Remove the item
//       }
//     },
//     incrementQuantity(state, action) {
//       const index = action.payload;
    
//       const existingItem = state.items[index];
    
     
//       if (existingItem) {
//         existingItem.quantity += 1;
//         existingItem.price += existingItem.eachprice;
//         // state.totalQuantity += 1;
//         state.totalPrice += existingItem.eachprice;
//       }


//         //console.log(existingItem.quantity)
//         console.log(existingItem.price)

//         console.log(state.totalPrice)
      
//     },
//     decrementQuantity(state, action) {
//       const index = action.payload;
//       const existingItem = state.items[index];
//       if (existingItem && existingItem.quantity > 1) {
//         existingItem.quantity -= 1;
//         existingItem.price -= existingItem.eachprice;
//        //state.totalQuantity -= 1;
//         state.totalPrice -= existingItem.eachprice;
//       }
//     },
//     clearCart(state) {
//       state.items = [];
//       state.totalQuantity = 0;
//       state.totalPrice = 0;
//     },
    
//   },
// });

// export const { addItem, removeItem, incrementQuantity, decrementQuantity, clearCart } =
//   cartSlice.actions;
// export default cartSlice.reducer;
// export const selectCartItems = (state) => state.cart.items;
// export const selectCartTotalQuantity = (state) => state.cart.totalQuantity;
// export const selectCartTotalPrice = (state) => state.cart.totalPrice;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Cart items
  totalQuantity: 0, // Total quantity of items in the cart
  totalPrice: 0, // Total price of all items
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.title === newItem.title &&
          JSON.stringify(item.ingredients) === JSON.stringify(newItem.ingredients) &&
          JSON.stringify(item.toppings) === JSON.stringify(newItem.toppings) &&
          item.size === newItem.size
      );

      if (existingItem) {
        existingItem.quantity += 1;
        // Add eachprice field if not exists
        if (!existingItem.eachprice) {
          existingItem.eachprice = parseFloat(newItem.price);
        }
        existingItem.price = existingItem.eachprice * existingItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          eachprice: parseFloat(newItem.price),
          price: parseFloat(newItem.price),
        });
      }
      state.totalQuantity += 1;
      state.totalPrice += parseFloat(newItem.price);
    },
    
    removeItem(state, action) {
      const index = action.payload;
      const existingItem = state.items[index];
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price; // Use the current total price for this item
        state.items.splice(index, 1); // Remove the item
      }
    },
    
    incrementQuantity(state, action) {
      const index = action.payload;
      const existingItem = state.items[index];
      
      if (existingItem) {
        // Ensure eachprice exists
        if (!existingItem.eachprice) {
          existingItem.eachprice = parseFloat(existingItem.price) / existingItem.quantity;
        }
        
        existingItem.quantity += 1;
        existingItem.price = existingItem.eachprice * existingItem.quantity;
        state.totalQuantity += 1;
        state.totalPrice += existingItem.eachprice;
      }
    },
    
    decrementQuantity(state, action) {
      const index = action.payload;
      const existingItem = state.items[index];
      
      if (existingItem && existingItem.quantity > 1) {
        // Ensure eachprice exists
        if (!existingItem.eachprice) {
          existingItem.eachprice = parseFloat(existingItem.price) / existingItem.quantity;
        }
        
        existingItem.quantity -= 1;
        existingItem.price = existingItem.eachprice * existingItem.quantity;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.eachprice;
      }
    },
    
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalQuantity = (state) => state.cart.totalQuantity;
export const selectCartTotalPrice = (state) => state.cart.totalPrice;