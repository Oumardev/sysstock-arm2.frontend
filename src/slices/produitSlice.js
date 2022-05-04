import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiInstance from '../Utils/api/axios.config'
import { LIST_PRODUCTS_DATA_URL} from "../Utils/api/apiUrls"

export const listProduit = createAsyncThunk(
  'users/listProduit',
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.get(LIST_PRODUCTS_DATA_URL, {
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {
        
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

export const createProduit = createAsyncThunk(
  'users/createProduit',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      console.log('create user test ...')

      const response = await apiInstance.post(LIST_PRODUCTS_DATA_URL, values,{
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {
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

export const editProduit = createAsyncThunk(
  'users/editUser',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.patch(LIST_PRODUCTS_DATA_URL + `${values.id}/`, values ,{
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {
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

export const deleteProduit = createAsyncThunk(
  'users/deleteProduit',
  async (id ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.delete(LIST_PRODUCTS_DATA_URL + `${id}/` ,{
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

export const produitSlice = createSlice({
  name: "produit",

    initialState: {
        isError: false,
        ls_produit: [],
        prodUpdated: false,
        isFetching: false,

        errorMessage: '',

    },

    reducers: {
        clearState: (state) => {
            state.isFetching = false;
            state.isError = false;
            state.ls_produit = [];
            state.errorMessage = ""

            state.prodUpdated = false;
            return state;
        },
    },

    extraReducers: {
        
        
          // list produit
           [listProduit.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.ls_produit = payload
            return state;
          },
          [listProduit.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [listProduit.pending]: (state) => {
            state.isFetching = true;
          },
        
          // create produit
          [createProduit.fulfilled]: (state, { payload }) => {
            state.prodUpdated = false;
            return state;
          },
          [createProduit.rejected]: (state, { payload }) => {
            state.prodUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [createProduit.pending]: (state) => {
            state.prodUpdated = true;
          },
          
          // edit produit
          [editProduit.fulfilled]: (state, { payload }) => {
            state.prodUpdated = false;
            return state;
          },
          [editProduit.rejected]: (state, { payload }) => {
            state.prodUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [editProduit.pending]: (state) => {
            state.prodUpdated = true;
          },

          // delete produit
          [deleteProduit.fulfilled]: (state, { payload }) => {
            state.prodUpdated = false;
            return state;
          },
          [deleteProduit.rejected]: (state, { payload }) => {
            state.prodUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [deleteProduit.pending]: (state) => {
            state.prodUpdated = true;
          },

        },
    
})

export const { clearState } = produitSlice.actions;
export const produitSelector = state => state.produit