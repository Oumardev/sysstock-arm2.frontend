import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiInstance from '../Utils/api/axios.config'
import { LIST_MARKETS_DATA_URL , LIST_ZONES_DATA_URL, LIST_MARKETS_PRICES_DATA_URL } from "../Utils/api/apiUrls"

export const listMarche = createAsyncThunk(
  'marche/listMarche',
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.get(LIST_MARKETS_DATA_URL ,{
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

const formatRegionDepartementCommune = (data) =>{
    let uniqueRegion = []
    
    for(var i=0 ; i< data.length ; i++){
      if(!uniqueRegion.includes(data[i].region))
        uniqueRegion.push(data[i].region)
    }


    var finalData = []
    for(var k=0; k< uniqueRegion.length; k++){
        var departement = []
        var nameDepartement = []
        var commune = []
        
        for(var i=0; i< data.length; i++){
        commune = []
          if(uniqueRegion[k] == data[i].region){
            
            if(!nameDepartement.includes(data[i].departement)){
                nameDepartement.push(data[i].departement)

              for(var j=0; j < data.length; j++){
                if( data[j].departement == data[i].departement ){
                  
                  if(!commune.includes(data[j].commune)){
                    commune.push(data[j].commune) 
                  }
                      
                }
                    
              }

              departement.push({nom: data[i].departement, commune : commune})
            }
          }
        }
        
        var itf ={
          nom : uniqueRegion[k],
          departement : departement
        }

      finalData.push(itf)
    }

    return finalData
}

export const getRegionDepartementCommune = createAsyncThunk(
  'marche/listRegDepCom',
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.get(LIST_ZONES_DATA_URL ,{
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {

        const formatData = formatRegionDepartementCommune(data)

        return formatData;

      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const getZone = createAsyncThunk(
  'zone/listZone',
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.get(LIST_ZONES_DATA_URL ,{
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

export const addMarche = createAsyncThunk(
  'marche/addMarche',
  async (values,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.post(LIST_MARKETS_DATA_URL ,values, {
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

export const editMarche = createAsyncThunk(
  'marche/editMarche',
  async (values,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.patch(LIST_MARKETS_DATA_URL + `${values.id}/` ,values, {
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

export const deleteMarche = createAsyncThunk(
  'marche/deleteMarche',
  async (id,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.delete(LIST_MARKETS_DATA_URL + `${id}/` , {
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

export const listPrixMarche = createAsyncThunk(
  'marche/listPrixMarche',
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.get(LIST_MARKETS_PRICES_DATA_URL ,{
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

export const addPrixMarche = createAsyncThunk(
  'marche/addPrixMarche',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      const response = await apiInstance.post(LIST_MARKETS_PRICES_DATA_URL ,values,{
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

export const editPrixMarche = createAsyncThunk(
  'marche/editPrixMarche',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      const response = await apiInstance.patch(LIST_MARKETS_PRICES_DATA_URL +  `${values.id}/` , values,{
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

export const deletePrixMarche = createAsyncThunk(
  'marche/deletePrixMarche',
  async (id ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      const response = await apiInstance.delete(LIST_MARKETS_PRICES_DATA_URL +  `${id}/` ,{
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


export const marcheSlice = createSlice({
  name: "marche",

    initialState: {
        isFetching: false,
        ls_prixMarche : [],
        ls_marche: [],
        ls_zone: [],
        RegionDepartementCommune: [],
        isLogin: false,
        isError: false,
        errorMessage: '',

        marUpdated : false,
        prixMarUpdated : false,
    },

    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isFetching = false;
            state.ls_prixMarche = [];
            state.ls_marche = [];
            state.ls_zone = []
            state.RegionDepartementCommune = [];
            state.errorMessage = ""

            state.marUpdated = false;
            state.prixMarUpdated = false;
      
            return state;
        },
    },

    extraReducers: {

          // list Marché
          [listMarche.fulfilled]: (state, { payload }) => {
            state.ls_marche = payload;
            state.isFetching = false;
            return state;
          },
          [listMarche.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [listMarche.pending]: (state) => {
            state.isFetching = true;
          },

          // getRegionDepartementCommune
          [getRegionDepartementCommune.fulfilled]: (state, { payload }) => {
            state.RegionDepartementCommune = payload;
            state.isFetching = false;
            return state;
          },
          [getRegionDepartementCommune.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [getRegionDepartementCommune.pending]: (state) => {
            state.isFetching = true;
          },

          // add marche
          [addMarche.fulfilled]: (state, { payload }) => {
            state.marUpdated = false;
            return state;
          },
          [addMarche.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.marUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [addMarche.pending]: (state) => {
            state.marUpdated = true;
          },

          // get zone
          [getZone.fulfilled]: (state, { payload }) => {
            state.ls_zone = payload;
            state.isFetching = false;
            return state;
          },
          [getZone.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [getZone.pending]: (state) => {
            console.log('loadind for list zone ...')
            state.isFetching = true;
          },

          // edit marche
          [editMarche.fulfilled]: (state, { payload }) => {
            console.log('variete is edited :', payload)
            state.marUpdated = false;
            return state;
          },
          [editMarche.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.marUpdated = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [editMarche.pending]: (state) => {
            console.log('loadind for edit variete ...')
            state.marUpdated = true;
          },

          // delete marche
          [deleteMarche.fulfilled]: (state, { payload }) => {
            state.marUpdated = false;
            return state;
          },
          [deleteMarche.rejected]: (state, { payload }) => {
            state.marUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [deleteMarche.pending]: (state) => {
            state.marUpdated = true;
          },

          // list prix marche
          [listPrixMarche.fulfilled]: (state, { payload }) => {
            console.log('prix marche is listed :', payload)
            state.isFetching = false;
            state.ls_prixMarche = payload
            return state;
          },
          [listPrixMarche.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [listPrixMarche.pending]: (state) => {
            console.log('loadind for list prix marche ...')
            state.isFetching = true;
          },

          //  add prix marche
          [addPrixMarche.fulfilled]: (state, { payload }) => {
            console.log('prix marche is added')
            state.prixMarUpdated = false;
            return state;
          },
          [addPrixMarche.rejected]: (state, { payload }) => {
            state.prixMarUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [addPrixMarche.pending]: (state) => {
            state.prixMarUpdated = true;
          },

          //  edit prix marche
          [editPrixMarche.fulfilled]: (state, { payload }) => {
            console.log('prix marche is edited')
            state.prixMarUpdated = false;
            return state;
          },
          [editPrixMarche.rejected]: (state, { payload }) => {
            state.prixMarUpdated = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [editPrixMarche.pending]: (state) => {
            state.prixMarUpdated = true;
          },

          //  delete prix marche
          [deletePrixMarche.fulfilled]: (state, { payload }) => {
            state.prixMarUpdated = false;
            return state;
          },
          [deletePrixMarche.rejected]: (state, { payload }) => {
            state.prixMarUpdated = false;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [deletePrixMarche.pending]: (state) => {
            state.prixMarUpdated = true;
          },
        },
    
})

export const { clearState } = marcheSlice.actions;
export const marcheSelector = state => state.marche