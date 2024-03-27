import {createSlice} from '@reduxjs/toolkit';

export interface sidebarState{
  isOpen:boolean;
}

const initialState:sidebarState={
  isOpen:false
}

const sidebarSlice=createSlice({
  name:'sidebar',
  initialState,
  reducers:{
    toggleSidebar:(state,action)=>{
      state.isOpen=!state.isOpen;
    },
    setSidebarOpen:(state,action)=>{
      state.isOpen=action.payload;
    }

  }
});

export const {toggleSidebar,setSidebarOpen}=sidebarSlice.actions;
export default sidebarSlice.reducer;
