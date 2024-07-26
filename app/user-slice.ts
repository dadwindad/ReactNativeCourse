import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    age: 0,
    token: "",
  },
  reducers: {
    setInfo: (state, action) => {
      const { firstName, lastName, age, token } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.age = age;
      state.token = token;
    },
  },
});

export const { setInfo } = userSlice.actions;
export default userSlice.reducer;
