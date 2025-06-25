import { createSlice } from "@reduxjs/toolkit";

const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
const authUser = JSON.parse(localStorage.getItem("authUser")) || null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: savedUsers,
    user: authUser,
  },
  reducers: {
    signup: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("authUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("authUser");
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
