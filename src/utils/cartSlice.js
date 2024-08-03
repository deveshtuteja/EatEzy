import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            // can't do state=[] because it ref to a new obj. creates a copy of local var
            state.items.length=0;
            // can return { items:[] }; it replaces the state with this new object and does the same job
        },
    },
});

export const {addItems,removeItems,clearCart}=cartSlice.actions;

export default cartSlice.reducer;