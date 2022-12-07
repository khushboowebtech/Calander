import { createSlice } from '@reduxjs/toolkit'
const   INITIAL_STATE={
    addevent:{}

}
const eventSlice = createSlice({
    name:"event",
    initialState:INITIAL_STATE,
    reducers:{
        eventStart:()=>{},
        eventSucess:(state,{payload})=>{
            state.addevent=payload
        },
        eventFailed:()=>{},
    }  
})
const {actions,reducer} =eventSlice
export default reducer
export const {eventSucess}=actions
export const eventThunk = (data)=>async(dispatch)=>{
    console.log("value",data)
    dispatch (eventSucess(data))
}