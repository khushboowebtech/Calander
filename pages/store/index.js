import { configureStore } from '@reduxjs/toolkit';
import eventReducer from "../redux/eventReducer"



const store = configureStore({ 
    reducer:{
     eventReducer }})

     export default store