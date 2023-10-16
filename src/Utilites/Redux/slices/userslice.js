import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      console.log("sata::::",state,action);
      state.users = action.payload;
    },
  },
});

export const { setUsersData } = userSlice.actions;

export default userSlice.reducer;
