import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




// export const login = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
//   try {
//     const response = await axios.post('https://reqres.in/api/login', credentials);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });

// const UserSlice = createSlice({
//   name: 'user',
//   initialState: {
//     user: null,
//     token: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.error = null;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || 'Failed to login';
//       });
//   },
// });

const  UserSlice= createSlice({
  name:"UserSlice",
  initialState:{
    token:""
  },
  reducers:{
      login(state,action){
          state=action.payload;
      },
      logout(state, action){
        state=null;
      }

  }
});




export const{login, logout}=UserSlice.actions;
export default UserSlice.reducer;
