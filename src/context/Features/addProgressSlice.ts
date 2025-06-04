import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        id: "",
      title: "",
      content: "",
      image: "",
      videoLink: "",
      teacherName: "",
      numSucces: 0,
      numFinish: 0,
      progress: [
        {
          id: "",
          title: "",
          description: "",
          active: true
        }
      ]
    }
}

const addProgressSlice = createSlice({
    name: 'addProgress',
    initialState,
    reducers:{
        sendData: (state, action) => {
            console.log("data", action.payload)
            state.data = action.payload;
        },
        changeProgress: (state) => {
            state.data.numSucces = 1;
            console.log("data from state :",state.data);
            
        }
    }
})

export default addProgressSlice.reducer;
export const {sendData, changeProgress} = addProgressSlice.actions;