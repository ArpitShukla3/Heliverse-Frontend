import {createSlice} from "@reduxjs/toolkit"
    const Slice= createSlice({
        name:'user',
        initialState:{
           page:1
        },
        reducers:{
            prevPage:(state,action)=>{   
               if(state.page!=1)
               {
                state.page=state.page -1;
               }
            },
           nextPage:(state,action)=>{
            state.page=state.page+1;
           }
        }
    })

export const {  prevPage,nextPage} = Slice.actions;
export default Slice.reducer;