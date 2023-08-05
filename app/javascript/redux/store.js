import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./messages/messagesSlice";

const store = configureStore({
  reducer: {
    messageStore: messageReducer,
  },
});

export default store;
