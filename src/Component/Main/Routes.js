import React from "react";
import { Route } from 'react-router-dom'

import ConnexionContainer from "../../Container/Connexion/Connexion";
import DashbordContainer from "../../Container/Dashbord/Dashbord"
import MarcheContainer from "../../Container/Marches/Marches"
import ParcContainer from "../../Container/Parcs/Parcs";
import ProduitContainer from "../../Container/Produits/Produits";
import UtilisateurContainer from "../../Container/Utilisateurs/Utilisateur";

/**Component Descripton:
 * Ce composant servira a switcher sur l'ensemble des routes de l'application
 */

function AllRoutes() {
    return (
      <React.Fragment>
        <Route path="/" component={<ConnexionContainer />} />
        <Route path="/dashbord" element={<DashbordContainer />} />
        <Route path="/marche" element={<MarcheContainer />} />
        <Route path="/parcs" element={<ParcContainer />} />
        <Route path="/produit" element={<ProduitContainer />} />
        <Route path="/utilisateur" element={<UtilisateurContainer />} />
      </React.Fragment>
    );
  }
  
  export default AllRoutes;
