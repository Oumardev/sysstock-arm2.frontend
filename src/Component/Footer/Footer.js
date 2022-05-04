import React from "react";
import './styles.css'
import Logo from "../../assets/logoSysStock-white.svg";

/**Component Descripton:
 * Ce composant s'affichera en dessous de chaque page
 */
function Footer() {

  return (
    <div style={{position:'fixed'}} className='footer'>
      <h4>© 2021 - powered by</h4>
      <img
        src={Logo}
        alt="SysStock 3"
        style={{ width: "50px", objectFit: "cover" }}
      />
    </div>
  );
}

export default Footer;
