import { createSlice } from "@reduxjs/toolkit";
import { OFF_CHAT_LIMIT } from "./constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(OFF_CHAT_LIMIT, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
