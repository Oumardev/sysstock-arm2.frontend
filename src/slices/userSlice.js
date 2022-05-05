import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiInstance from '../Utils/api/axios.config'
import { LOGIN_URL, LIST_USERS_DATA_URL, CREATE_USER } from "../Utils/api/apiUrls"
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
    'users/login',
    async (values, thunkAPI) => {
      try {
      
        const response = await apiInstance.post(LOGIN_URL, values);
        let data = response.data
        
        if (response.status === 200) {

          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.my_user.id);

            toast.success("Vous êtes connecté!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
                  
            window.location.href = '/dashbord'
            return data;
        } else {
          console.log('here')
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e) {
        console.log('Error', e.response.data);

        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
);

export const listUser = createAsyncThunk(
  'users/listUser',
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
    
      const response = await apiInstance.get(LIST_USERS_DATA_URL, { 
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {
        
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const createUser = createAsyncThunk(
  'users/createUser',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
     
      const response = await apiInstance.post(CREATE_USER, values,{
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {

        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const editUser = createAsyncThunk(
  'users/editUser',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.patch(LIST_USERS_DATA_URL + `${values.user.id}/`, values ,{
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.delete(LIST_USERS_DATA_URL + `${id}/`,{
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {

      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  'users/getUser',
  async (id ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
     
      const response = await apiInstance.get(LIST_USERS_DATA_URL + `${id}/`, {
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {
        
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",

    initialState: {
        token : "",
        my_user : {},
        isFetching: false,
        ls_users : [],
        isLogin: false,
        isError: false,
        errorMessage: '',

        userUpdated : false,
    },

    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isLogin = false;
            state.isFetching = false;
            state.my_user = {}
            state.ls_users = [];
            state.token = "";
            state.errorMessage = ""

            state.userUpdated = false;
            return state;
        },
    },

    extraReducers: {
        
          // login User
          [loginUser.fulfilled]: (state, { payload }) => {
            state.token = payload.token;
            state.my_user = JSON.stringify(payload.my_user);
            state.isFetching = false;
            state.isLogin = true;
            localStorage.setItem("isLogin", state.isLogin);
            return state;
          },
          [loginUser.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [loginUser.pending]: (state) => {
            state.isFetching = true;
          },
        
          // list user
          [listUser.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.ls_users = payload
            return state;
          },
          [listUser.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [listUser.pending]: (state) => {
            state.isFetching = true;
          },
        
          // create user
          [createUser.fulfilled]: (state, { payload }) => {
            state.userUpdated = false;
            return state;
          },
          [createUser.rejected]: (state, { payload }) => {
            state.userUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [createUser.pending]: (state) => {
            state.userUpdated = true;
          },
        
          // edit user
           [editUser.fulfilled]: (state, { payload }) => {
            state.userUpdated = false;
            return state;
          },
          [editUser.rejected]: (state, { payload }) => {
            state.userUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [editUser.pending]: (state) => {
            state.userUpdated = true;
          },

          // delete user
          [deleteUser.fulfilled]: (state, { payload }) => {
            state.userUpdated = false;
            return state;
          },
          [deleteUser.rejected]: (state, { payload }) => {
            state.userUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [deleteUser.pending]: (state) => {
            state.userUpdated = true;
          },
 
          //  get user profile
          [getUserProfile.fulfilled]: (state, { payload }) => {
            state.my_user = payload
            return state;
          },
          [getUserProfile.rejected]: (state, { payload }) => {
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [getUserProfile.pending]: (state) => {
           // state.prixMarUpdated = true;
          },
        },
    
})

export const { clearState } = userSlice.actions;
export const userSelector = state => state.user