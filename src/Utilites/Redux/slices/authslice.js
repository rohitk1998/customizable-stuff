import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userAuth : {
    token : "",
  }
};

export const slice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser : (state, action) => {
      console.log("action", action);
      state.userAuth.token = action.payload
    }
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;
