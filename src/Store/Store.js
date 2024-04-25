import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./Cartslice";
const Store=configureStore({
    reducer:{
        cart:Cartreducer
    }
})
export default Store