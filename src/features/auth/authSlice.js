import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  email: '',
  role: '', // 'admin' or 'user'
  token: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.token = action.payload.token;
    },
    logout: (state) => {
      return initialState;
    }
  }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
