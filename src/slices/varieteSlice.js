import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiInstance from '../Utils/api/axios.config'
import { LIST_PRODUCTS_DATA_URL, LIST_VARIETIES_DATA_URL } from "../Utils/api/apiUrls"

export const addVariete = createAsyncThunk(
  'variete/addVariete',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.post(LIST_VARIETIES_DATA_URL, values,{
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {

      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const listProductVariete = createAsyncThunk(
  'products/listVariete',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
    
      const response = await apiInstance.get(LIST_PRODUCTS_DATA_URL + `${values.id}/` ,{
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {
        return data;
      } else {

        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const editVariete = createAsyncThunk(
  'products/editVariete',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      const response = await apiInstance.put(LIST_VARIETIES_DATA_URL + `${values.id}/`,values,{
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {

      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const deleteVariete = createAsyncThunk(
  'products/deleteVariete',
  async (id ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      
      const response = await apiInstance.delete(LIST_VARIETIES_DATA_URL + `${id}/`,{
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {
        return data;
      } else {

        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {

      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const listVariete = createAsyncThunk(
  'variete/listVariete',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.get(LIST_VARIETIES_DATA_URL ,{
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const varieteSlice = createSlice({
  name: "variete",

    initialState: {
        isFetching: false,
        ls_product_variete: [],
        ls_variete: [],
        isError: false,
        errorMessage: '',

        varUpdated: false,
    },

    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isFetching = false;
            state.ls_product_variete = [];
            state.ls_variete = [];
            state.errorMessage = ""

            state.varUpdated = false;
            return state;
        },
    },

    extraReducers: {
          // add variete
          [addVariete.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            return state;
          },
          [addVariete.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [addVariete.pending]: (state) => {
            state.isFetching = true;
          },

          // list product variete
          [listProductVariete.fulfilled]: (state, { payload }) => {
            state.ls_product_variete = payload;
            state.isFetching = false;
            return state;
          },
          [listProductVariete.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [listProductVariete.pending]: (state) => {
            state.isFetching = true;
          },

          // edit variete
          [editVariete.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            return state;
          },
          [editVariete.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [editVariete.pending]: (state) => {
            state.isFetching = true;
          },

          // delete variete
          [deleteVariete.fulfilled]: (state, { payload }) => {
            state.varUpdated = false;
            return state;
          },
          [deleteVariete.rejected]: (state, { payload }) => {
            state.varUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [deleteVariete.pending]: (state) => {
            state.varUpdated = true;
          },

           // list variete
           [listVariete.fulfilled]: (state, { payload }) => {
            state.ls_variete = payload;
            state.isFetching = false;
            return state;
          },
          [listVariete.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [listVariete.pending]: (state) => {
            state.isFetching = true;
          },
        }
    
})

export const { clearState } = varieteSlice.actions;
export const varieteSelector = state => state.variete