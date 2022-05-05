import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./slices/userSlice"
import { produitSlice } from "./slices/produitSlice"
import { varieteSlice } from "./slices/varieteSlice"
import { marcheSlice } from "./slices/marcheSlice"
import { parcSlice } from "./slices/parcSlice"

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    produit : produitSlice.reducer,
    variete : varieteSlice.reducer,
    marche : marcheSlice.reducer,
    parc : parcSlice.reducer
  }
})