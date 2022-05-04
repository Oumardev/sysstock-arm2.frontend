import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apiInstance from '../Utils/api/axios.config'
import { LOGIN_URL, LIST_USERS_DATA_URL, CREATE_USER, LIST_PRODUCTS_DATA_URL, LIST_VARIETIES_DATA_URL, LIST_MARKETS_DATA_URL , LIST_ZONES_DATA_URL, LIST_MARKETS_PRICES_DATA_URL, LIST_PARCS_DATA_URL, LIST_PARCS_PRICES_DATA_URL} from "../Utils/api/apiUrls"
import { toast } from "react-toastify";


export const loginUser = createAsyncThunk(
    'users/login',
    async (values, thunkAPI) => {
      try {
        console.log('test ...')

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
      console.log('create user test ...')

      const response = await apiInstance.post(CREATE_USER, values,{
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

export const listProduit = createAsyncThunk(
  'users/listProduit',
  async (thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      console.log('list produit test ...')

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
      console.log('edit test ...',values)

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

export const addVariete = createAsyncThunk(
  'variete/addVariete',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      console.log('create variete test ...')

      const response = await apiInstance.post(LIST_VARIETIES_DATA_URL, values,{
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

export const listProductVariete = createAsyncThunk(
  'products/listVariete',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      console.log('list product variete test ...',values)

      const response = await apiInstance.get(LIST_PRODUCTS_DATA_URL + `${values.id}/` ,{
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

export const editVariete = createAsyncThunk(
  'products/editVariete',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      console.log('edit variete test ...',values)
     
      const response = await apiInstance.put(LIST_VARIETIES_DATA_URL + `${values.id}/`,values,{
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
      console.log('error data', values)
      console.log('Error', e.response.data);

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
      console.log('Error', e.response.data);

      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const listVariete = createAsyncThunk(
  'variete/listVariete',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      console.log('list variete test ...',values)

      const response = await apiInstance.get(LIST_VARIETIES_DATA_URL ,{
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
        console.log('here')
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

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
          departement : departement//[{}]
        }

      finalData.push(itf)
    }

    return finalData
}

export const getRegionDepartementCommune = createAsyncThunk(
  'marche/listRegDepCom',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")

      const response = await apiInstance.get(LIST_ZONES_DATA_URL ,{
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {

        const formatData = formatRegionDepartementCommune(data)

        console.log('formatdata ',formatData)
        return formatData;

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
        console.log('here')
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

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
      console.log('Error', e.response.data);

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
      console.log('Error', e.response.data);

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
      console.log('Error', e.response.data);

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
        console.log('here')
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const addPrixMarche = createAsyncThunk(
  'marche/addPrixMarche',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      console.log(values)
      const response = await apiInstance.post(LIST_MARKETS_PRICES_DATA_URL ,values,{
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {
        return data;
      } else {
        console.log('here', data)
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const editPrixMarche = createAsyncThunk(
  'marche/editPrixMarche',
  async (values ,thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      console.log(values)
      const response = await apiInstance.patch(LIST_MARKETS_PRICES_DATA_URL +  `${values.id}/` , values,{
        headers: { Authorization: `Token ${token}` },
      });

      let data = response.data
       
      if (response.status === 200) {
        return data;
      } else {
        console.log('here', data)
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

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
      console.log('get user profile test ...')

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
        console.log('here')
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

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
      console.log('Error', e.response.data);

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
      console.log('Error', e.response.data);

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
      console.log('Error', e.response.data);

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
        console.log('here')
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

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
        console.log('here', data)
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

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
        console.log('here', data)
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

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
        console.log('here', data)
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
        ls_produit: [],
        ls_product_variete: [],
        ls_parc : [],
        ls_prixMarche : [],
        ls_variete: [],
        ls_marche: [],
        ls_zone: [],
        ls_prixParc : [],
        RegionDepartementCommune: [],
        isLogin: false,
        isError: false,
        errorMessage: '',

        userUpdated : false,
        prodUpdated: false,
        varUpdated: false,
        marUpdated : false,
        prixMarUpdated : false,
        prixParcUpdated : false,
        parcUpdated : false
    },

    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isLogin = false;
            state.isFetching = false;
            state.ls_users = [];
            state.ls_product_variete = [];
            state.ls_prixMarche = [];
            state.ls_produit = [];
            state.ls_variete = [];
            state.ls_prixParc = [];
            state.ls_marche = [];
            state.ls_parc = []
            state.ls_zone = []
            state.RegionDepartementCommune = [];
            state.token = "";
            state.errorMessage = ""

            state.marUpdated = false;
            state.userUpdated = false;
            state.varUpdated = false;
            state.prodUpdated = false;
            state.parcUpdated = false;
            state.prixParcUpdated = false;
            state.prixMarUpdated = false;
      
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
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [loginUser.pending]: (state) => {
            state.isFetching = true;
          },
        
          // list user
          [listUser.fulfilled]: (state, { payload }) => {
            console.log('fulFilled :', payload)
            state.isFetching = false;
            state.ls_users = payload
            return state;
          },
          [listUser.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [listUser.pending]: (state) => {
            console.log('loadind for list user ...')
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
        
          // list produit
           [listProduit.fulfilled]: (state, { payload }) => {
            console.log('produit is listed :', payload)
            state.isFetching = false;
            state.ls_produit = payload
            return state;
          },
          [listProduit.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [listProduit.pending]: (state) => {
            console.log('loadind for list produit ...')
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

          // add variete
          [addVariete.fulfilled]: (state, { payload }) => {
            console.log('variete is created :', payload)
            state.isFetching = false;
            return state;
          },
          [addVariete.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [addVariete.pending]: (state) => {
            console.log('loadind for add variete ...')
            state.isFetching = true;
          },

          // list product variete
          [listProductVariete.fulfilled]: (state, { payload }) => {
            console.log('variete of products is listed :', payload)
            state.ls_product_variete = payload;
            state.isFetching = false;
            return state;
          },
          [listProductVariete.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [listProductVariete.pending]: (state) => {
            console.log('loadind for list product variete ...')
            state.isFetching = true;
          },

          // edit variete
          [editVariete.fulfilled]: (state, { payload }) => {
            console.log('variete is edited :', payload)
            state.isFetching = false;
            return state;
          },
          [editVariete.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [editVariete.pending]: (state) => {
            console.log('loadind for edit product variete ...')
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
            console.log('variete is listed :', payload)
            state.ls_variete = payload;
            state.isFetching = false;
            return state;
          },
          [listVariete.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [listVariete.pending]: (state) => {
            console.log('loadind for list variete ...')
            state.isFetching = true;
          },

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

          //  get user profile
          [getUserProfile.fulfilled]: (state, { payload }) => {
            console.log('user profile is geted', payload)
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

          //  list parc
          [listParc.fulfilled]: (state, { payload }) => {
            console.log('parc is listed', payload)
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
            console.log('parc is added')
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
            console.log('parc is edited')
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
            console.log('prix parc is listed :', payload)
            state.isFetching = false;
            state.ls_prixParc = payload
            return state;
          },
          [listPrixParc.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload ? payload.error_message: '';
          },
          [listPrixParc.pending]: (state) => {
            console.log('loadind for list prix parc ...')
            state.isFetching = true;
          },

          //  add prix parc
          [addPrixParc.fulfilled]: (state, { payload }) => {
            console.log('prix parc is added')
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
            console.log('prix parc is edited')
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

export const { clearState } = userSlice.actions;
export const userSelector = state => state.user