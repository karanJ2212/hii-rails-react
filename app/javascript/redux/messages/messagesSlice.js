import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:5000/api/v1/greetings";

export const getMessages = createAsyncThunk("messages/slice", async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
});

const initialState = {
  messages: {},
  isLoading: false,
};

const messageSlice = createSlice({
  name: "messageStore",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMessages.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getMessages.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(getMessages.fulfilled, (state, action) => {
      return {
        ...state,
        messages: action.payload || {},
        isLoading: false,
      };
    });
  },
});

export default messageSlice.reducer;
