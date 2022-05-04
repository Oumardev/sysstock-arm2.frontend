import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import ConnexionContainer from "../../Container/Connexion/Connexion";
import DashbordContainer from "../../Container/Dashbord/Dashbord"
import MarcheContainer from "../../Container/Marches/Marches"
import PrixMarcheContainer from '../../Container/Marches/PrixMarche'
import ParcContainer from "../../Container/Parcs/Parcs";
import PrixParcsContainer from "../../Container/Parcs/PrixParcs";
import ProduitContainer from "../../Container/Produits/Produits";
import UtilisateurContainer from "../../Container/Utilisateurs/Utilisateur";
import VarieteContainer from '../../Container/Produits/Variete';
import Profile from '../../Container/Profile/Profile'
import InfoVarieteProduct from '../Modal/produit/InfoVarieteProduct';
import store from '../../store';
import { Provider } from 'react-redux';

/**Component Descripton:
 * Ce composant est le composant principale 
 * c'est celui qui gère l'ensemble des routes du site web
 */

function Main() {
  return (
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route  path="/" element={<ConnexionContainer />} />
            <Route  path="/connexion" element={<ConnexionContainer />} />
            {/** Private route */}
            <Route  path="/dashbord" element={<DashbordContainer />} />
            <Route  path="/marche" element={<MarcheContainer />} />
            <Route  path="/prixmarche" element={<PrixMarcheContainer />} />
            <Route  path="/parcs" element={<ParcContainer />} />
            <Route  path="/prixparcs" element={<PrixParcsContainer />} />
            <Route  path="/produit" element={<ProduitContainer />} />
            <Route  path="/variete" element={<VarieteContainer />} />
            <Route  path="/produit/:id" element={<InfoVarieteProduct />} />
            <Route  path="/utilisateur" element={<UtilisateurContainer />} />
            <Route  path="/profile" element={<Profile />} />
        </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default Main;
