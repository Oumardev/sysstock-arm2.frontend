import React from "react";
import "./styles.css"
import logo from '../../assets/logoARM.png'
import { Link, useNavigate } from "react-router-dom";

/**Component Descripton:
 * Ce composant s'affichera en tete de chaque page 
 */

function Header() {

  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    navigate('/')
  };

  return (
    <div>
   <ul className="menu">
        <div className="header">
            <img src={logo} className="logo-menu" alt="logo" />
            <h3>SysStock</h3>
        </div>
        
        <Link to={"/dashbord"}><li><a href="#"><i class="fa fa-tachometer" aria-hidden="true"></i> <p>Dashbord</p></a></li></Link>
        <Link to={"/utilisateur"}><li><a href="#"><i class="fa fa-users" aria-hidden="true"></i> <p>Utilisateurs</p></a></li></Link>
        <li><Link to={"/produit"}><a href="#"><i class="fa fa-product-hunt" aria-hidden="true"></i><p>Produits</p> <i class="fa fa-chevron-down" aria-hidden="true"></i></a></Link>
          <ul className="sub-menu">
            <Link to={"/produit"}><li> <p>Produits</p></li></Link>
            <Link to={"/variete"}><li> <p>Variétés</p></li></Link>
          </ul>
        </li>
        
        <li><Link to={"/marche"}><a href="#"><i class="fa fa-bar-chart" aria-hidden="true"></i><p>Marché</p> <i class="fa fa-chevron-down" aria-hidden="true"></i></a></Link>
          <ul className="sub-menu">
            <Link to={"/marche"}><li>Marché</li></Link>
            <Link to={"/prixmarche"}><li>Prix marché</li></Link>
          </ul>
        </li>

        <li><Link to={"/parcs"}><i class="fa fa-bus" aria-hidden="true"></i><p>Parcs</p> <i class="fa fa-chevron-down" aria-hidden="true"></i></Link>
          <ul className="sub-menu">
            <Link to={"/parcs"}><li>Parcs</li></Link>
            <Link to={"/prixparcs"}><li>Prix parcs</li></Link>
          </ul>
        </li>

        <div class="dropdown show">
          <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fa fa-user" aria-hidden="true"></i>
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <Link class="dropdown-item" to={"/profile"}>Profile</Link>
            <a style={{color:'red'}} onClick={()=>  logout()} class="dropdown-item" href="#">Déconnexion <i class="fa fa-sign-out" aria-hidden="true"></i></a>
          </div>
        </div>
        
      </ul>
    </div>
  );
}

export default Header;
