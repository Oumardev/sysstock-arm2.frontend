import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiInstance from '../Utils/api/axios.config'
import { LIST_PARCS_DATA_URL, LIST_PARCS_PRICES_DATA_URL } from "../Utils/api/apiUrls"

export const listParc = createAsyncThunk(
  'parc/listParc',
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.get(LIST_PARCS_DATA_URL ,{
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

export const addParc = createAsyncThunk(
  'parc/addParc',
  async (values,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.post(LIST_PARCS_DATA_URL ,values, {
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

export const editParc = createAsyncThunk(
  'parc/editParc',
  async (values,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.patch(LIST_PARCS_DATA_URL + `${values.id}/` ,values, {
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

export const deleteParc = createAsyncThunk(
  'parc/deleteParc',
  async (id,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.delete(LIST_PARCS_DATA_URL + `${id}/`, {
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

export const listPrixParc = createAsyncThunk(
  'parc/listPrixParc',
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.get(LIST_PARCS_PRICES_DATA_URL ,{
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

export const addPrixParc = createAsyncThunk(
  'parc/addPrixParc',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.post(LIST_PARCS_PRICES_DATA_URL ,values,{
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

export const editPrixParc = createAsyncThunk(
  'parc/editPrixParc',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
  
      const response = await apiInstance.patch(LIST_PARCS_PRICES_DATA_URL +  `${values.id}/` , values,{
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

export const deletePrixParc = createAsyncThunk(
  'parc/deletePrixParc',
  async (id ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.delete(LIST_PARCS_PRICES_DATA_URL +  `${id}/` ,{
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

export const parcSlice = createSlice({
  name: "parc",

    initialState: {
        isFetching: false,
        ls_parc : [],
        ls_prixParc : [],
        isError: false,
        errorMessage: '',

        prixParcUpdated : false,
        parcUpdated : false
    },

    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isFetching = false;
            state.ls_prixParc = [];
            state.ls_parc = []
            state.errorMessage = ""

            state.parcUpdated = false;
            state.prixParcUpdated = false;
            return state;
        },
    },

    extraReducers: {
          //  list parc
          [listParc.fulfilled]: (state, { payload }) => {
            state.ls_parc = payload
            return state;
          },
          [listParc.rejected]: (state, { payload }) => {
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [listParc.pending]: (state) => {
           // state.prixMarUpdated = true;
          },

          //  add parc
          [addParc.fulfilled]: (state, { payload }) => {
            state.parcUpdated = false;
            return state;
          },
          [addParc.rejected]: (state, { payload }) => {
            state.parcUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [addParc.pending]: (state) => {
            state.parcUpdated = true;
          },

          // edit parc
          [editParc.fulfilled]: (state, { payload }) => {
            state.parcUpdated = false;
            return state;
          },
          [editParc.rejected]: (state, { payload }) => {
            state.parcUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [editParc.pending]: (state) => {
            state.parcUpdated = true;
          },

          // delete parc
          [deleteParc.fulfilled]: (state, { payload }) => {
            state.parcUpdated = false;
            return state;
          },
          [deleteParc.rejected]: (state, { payload }) => {
            state.parcUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [deleteParc.pending]: (state) => {
            state.parcUpdated = true;
          },

          // list prix parc
          [listPrixParc.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.ls_prixParc = payload
            return state;
          },
          [listPrixParc.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [listPrixParc.pending]: (state) => {
            state.isFetching = true;
          },

          //  add prix parc
          [addPrixParc.fulfilled]: (state, { payload }) => {
            state.prixParcUpdated = false;
            return state;
          },
          [addPrixParc.rejected]: (state, { payload }) => {
            state.prixParcUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [addPrixParc.pending]: (state) => {
            state.prixParcUpdated = true;
          },

          //  edit prix parc
          [editPrixParc.fulfilled]: (state, { payload }) => {
            state.prixParcUpdated = false;
            return state;
          },
          [editPrixParc.rejected]: (state, { payload }) => {
            state.prixParcUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [editPrixParc.pending]: (state) => {
            state.prixParcUpdated = true;
          },

          //  delete prix parc
          [deletePrixParc.fulfilled]: (state, { payload }) => {
            state.prixParcUpdated = false;
            return state;
          },
          [deletePrixParc.rejected]: (state, { payload }) => {
            state.prixParcUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [deletePrixParc.pending]: (state) => {
            state.prixParcUpdated = true;
          },
        },
    
})

export const { clearState } = parcSlice.actions;
export const parcSelector = state => state.parc